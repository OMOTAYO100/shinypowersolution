import { useState, useEffect } from "react";
import { SolarStore as initialStoreData } from "../data/SolarStore";
import { io } from "socket.io-client";

// For production on a live server, specify backend URL via VITE_API_URL.
// If empty, it uses relative paths (which Vite proxy handles in local dev).
const API_BASE_URL = import.meta.env.VITE_API_URL || "";
const API_URL = `${API_BASE_URL}/api/products`;

const socket = io(API_BASE_URL || "/");

export const useSolarStore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch from backend');
        }
        const data = await response.json();
        // Map _id to id so the frontend works consistently
        const formattedData = data.map(p => ({ ...p, id: p._id || p.id }));
        setProducts(formattedData);
      } catch (err) {
        console.error("Backend fetch error, falling back to local data:", err);
        // Fallback to local data if backend is down or not connected
        const savedProducts = localStorage.getItem("solarStoreProducts");
        if (savedProducts) {
          const parsed = JSON.parse(savedProducts);
          setProducts(parsed.map(p => ({ ...p, category: p.category || "Others" })));
        } else {
          setProducts(initialStoreData);
        }
        setError("Running in offline mode (Backend not reachable)");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Listen for real-time changes
    const handleProductAdded = (newProduct) => {
      setProducts((prev) => {
        if (prev.some(p => p.id === newProduct.id)) return prev;
        return [newProduct, ...prev];
      });
    };

    const handleProductUpdated = (updatedProduct) => {
      setProducts((prev) =>
        prev.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
      );
    };

    const handleProductDeleted = (deletedId) => {
      setProducts((prev) => prev.filter((product) => product.id !== deletedId));
    };

    socket.on("productAdded", handleProductAdded);
    socket.on("productUpdated", handleProductUpdated);
    socket.on("productDeleted", handleProductDeleted);

    return () => {
      socket.off("productAdded", handleProductAdded);
      socket.off("productUpdated", handleProductUpdated);
      socket.off("productDeleted", handleProductDeleted);
    };
  }, []);

  const addProduct = async (formData) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData, // FormData handles multipart/form-data for image uploads
      });
      
      if (!response.ok) throw new Error("Failed to add product");
      
      const newProduct = await response.json();
      setProducts((prev) => {
        if (prev.some(p => p.id === newProduct.id)) return prev;
        return [newProduct, ...prev];
      });
      return true;
    } catch (err) {
      console.error(err);
      alert("Error adding product. Is the backend running?");
      return false;
    }
  };

  const updateProduct = async (id, formData) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to update product");

      const updatedProduct = await response.json();
      setProducts((prev) =>
        prev.map((product) => (product.id === id ? updatedProduct : product))
      );
      return true;
    } catch (err) {
      console.error(err);
      alert("Error updating product. Is the backend running?");
      return false;
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete product");

      setProducts((prev) => prev.filter((product) => product.id !== id));
      return true;
    } catch (err) {
      console.error(err);
      alert("Error deleting product. Is the backend running?");
      return false;
    }
  };

  return {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    deleteProduct,
  };
};
