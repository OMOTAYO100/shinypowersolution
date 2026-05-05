import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSolarStore } from "../hooks/useSolarStore";
import { FaPlus, FaEdit, FaTrash, FaArrowLeft, FaImage, FaSignOutAlt } from "react-icons/fa";

function AdminStore() {
  const { products, addProduct, updateProduct, deleteProduct } = useSolarStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("adminAuth") === "true"
  );
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [authError, setAuthError] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Panels",
    description: "",
    image: "",
  });

  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleOpenModal = (product = null) => {
    if (product) {
      setEditingId(product.id);
      setFormData({
        name: product.name,
        price: product.price,
        category: product.category || "Others",
        description: product.description,
        image: product.image,
      });
      setImagePreview(product.image);
    } else {
      setEditingId(null);
      setFormData({ name: "", price: "", category: "Panels", description: "", image: "" });
      setImagePreview("");
      setImageFile(null);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // Save the actual file object for FormData
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    // Create FormData for multipart/form-data upload
    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("price", formData.price);
    submitData.append("category", formData.category);
    submitData.append("description", formData.description);
    
    if (imageFile) {
      submitData.append("image", imageFile); // Append the actual File object
    } else if (formData.image) {
      submitData.append("image", formData.image); // Append existing URL
    }

    let success = false;
    if (editingId) {
      success = await updateProduct(editingId, submitData);
    } else {
      success = await addProduct(submitData);
    }
    
    setIsSubmitting(false);

    if (success) {
      handleCloseModal();
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === "shinypowersolution.com" && credentials.password === "shinymedia@123") {
      sessionStorage.setItem("adminAuth", "true");
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Invalid username or password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          <div className="p-8 text-center bg-green-600 text-white">
            <h2 className="text-3xl font-bold mb-2">Admin Portal</h2>
            <p className="text-green-100 text-sm">Sign in to manage the store</p>
          </div>
          <div className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              {authError && (
                <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm font-medium border border-red-100 flex items-center gap-2">
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {authError}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  required
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-gray-50 hover:bg-white focus:bg-white"
                  placeholder="Enter admin username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  required
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-gray-50 hover:bg-white focus:bg-white"
                  placeholder="Enter admin password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-medium shadow-md shadow-green-200 hover:shadow-lg active:scale-[0.98] mt-2 text-lg"
              >
                Sign In to Dashboard
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-2xl font-bold text-gray-800">Store Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleOpenModal()}
              className="bg-green-600 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg flex items-center gap-2 hover:bg-green-700 transition font-medium shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base"
            >
              <FaPlus /> <span className="hidden sm:inline">Add Product</span>
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-50 text-red-600 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg flex items-center gap-2 hover:bg-red-100 transition font-medium border border-red-100 text-sm sm:text-base"
            >
              <FaSignOutAlt /> <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
          
      </header>
      <Link
              to="/store"
              className=" mt-4 mx-auto px-4 sm:px-6 lg:px-8 py-4 text-gray-500 hover:text-green-600 transition flex items-center gap-2 font-medium"
            >
              <FaArrowLeft /> Back to Store
            </Link>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wider">
                  <th className="p-4 font-semibold">Image</th>
                  <th className="p-4 font-semibold">Product Name</th>
                  <th className="p-4 font-semibold">Price</th>
                  <th className="p-4 font-semibold">Category</th>
                  <th className="p-4 font-semibold hidden md:table-cell">Description</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-gray-500">
                      No products found. Add a new product to get started.
                    </td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <tr
                      key={product.id}
                      className="hover:bg-gray-50 transition-colors group"
                    >
                      <td className="p-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/150?text=No+Image";
                            }}
                          />
                        </div>
                      </td>
                      <td className="p-4 font-medium text-gray-800">
                        {product.name}
                      </td>
                      <td className="p-4 font-semibold text-green-600">
                        {product.price}
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                          {product.category || "Others"}
                        </span>
                      </td>
                      <td className="p-4 text-gray-500 text-sm hidden md:table-cell max-w-xs truncate">
                        {product.description}
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleOpenModal(product)}
                            className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition"
                            title="Edit"
                          >
                            <FaEdit size={18} />
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this product?")) {
                                deleteProduct(product.id);
                              }
                            }}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition"
                            title="Delete"
                          >
                            <FaTrash size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 shrink-0">
              <h2 className="text-xl font-bold text-gray-800">
                {editingId ? "Edit Product" : "Add New Product"}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none transition"
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Image Upload Area */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-green-500 transition group relative bg-gray-50 h-[220px]">
                    {imagePreview ? (
                      <div className="relative w-full h-full">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-lg">
                          <label className="cursor-pointer bg-white/90 px-4 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-white transition flex items-center gap-2">
                            <FaImage /> Change Image
                            <input
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={handleImageUpload}
                            />
                          </label>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1 text-center flex flex-col items-center justify-center">
                        <FaImage className="mx-auto h-12 w-12 text-gray-400 group-hover:text-green-500 transition" />
                        <div className="flex text-sm text-gray-600 mt-4">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none px-2 py-1">
                            <span>Upload a file</span>
                            <input
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={handleImageUpload}
                              required={!editingId}
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 5MB</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Text Details Area */}
                <div className="col-span-1 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                      placeholder="e.g., 200W Solar Panel"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-gray-500 font-bold text-lg">₦</span>
                      </div>
                      <input
                        type="text"
                        name="price"
                        value={formData.price.replace('₦', '')}
                        onChange={(e) => {
                          const rawValue = e.target.value.replace(/[^0-9]/g, '');
                          if (!rawValue) {
                            setFormData((prev) => ({ ...prev, price: "" }));
                          } else {
                            const formattedVal = parseInt(rawValue, 10).toLocaleString('en-US');
                            setFormData((prev) => ({ ...prev, price: `₦${formattedVal}` }));
                          }
                        }}
                        required
                        className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        placeholder="85,000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                    >
                      <option value="Panels">Panels</option>
                      <option value="Batteries">Batteries</option>
                      <option value="Inverters">Inverters</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition resize-none"
                      placeholder="Product details..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-gray-100 shrink-0">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  disabled={isSubmitting}
                  className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 shadow-md transition disabled:opacity-70 flex items-center justify-center min-w-[120px]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Uploading...
                    </span>
                  ) : editingId ? (
                    "Save Changes"
                  ) : (
                    "Add Product"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminStore;
