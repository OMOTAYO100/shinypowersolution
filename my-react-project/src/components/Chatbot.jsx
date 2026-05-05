import React, { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi there! I'm the Shiny Power Solutions AI assistant. How can I help you with our solar products today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Use the Vite proxy for /api/chat or the full URL in production
      const API_BASE_URL = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send history excluding the initial greeting if preferred, but it's fine to send all
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch response");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having trouble connecting right now. " + (error.message.includes("OpenAI") ? "The API key is missing!" : "Please try again later.") }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-green-600 text-white rounded-full shadow-xl hover:bg-green-700 hover:scale-110 transition-all duration-300 z-40 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
      >
        <FaRobot size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-96 h-[500px] max-h-[80vh] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 z-50 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-green-600 p-4 flex justify-between items-center text-white shrink-0">
          <div className="flex items-center gap-2">
            <FaRobot size={20} />
            <h3 className="font-bold">Shiny AI Assistant</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-green-200 transition">
            <FaTimes size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
          {messages.map((msg, idx) => (
            <div key={idx} className={`max-w-[85%] p-3 rounded-2xl ${msg.role === "user" ? "bg-green-600 text-white self-end rounded-br-sm" : "bg-white border border-gray-200 text-gray-800 self-start rounded-bl-sm"}`}>
              <p className="text-sm whitespace-pre-wrap font-sans">{msg.content}</p>
            </div>
          ))}
          {isLoading && (
            <div className="bg-white border border-gray-200 text-gray-800 self-start rounded-2xl rounded-bl-sm p-4 w-16">
              <div className="flex space-x-1 items-center justify-center h-full">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-100 flex gap-2 shrink-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about our solar products..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 transition text-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 disabled:opacity-50 disabled:hover:bg-green-600 transition flex items-center justify-center shadow-md"
          >
            <FaPaperPlane size={14} className="-ml-1" />
          </button>
        </form>
      </div>
    </>
  );
}

export default Chatbot;
