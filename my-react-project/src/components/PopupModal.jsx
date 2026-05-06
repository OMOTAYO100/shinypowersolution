import React from 'react'

function PopupModal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null; 
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div className="bg-white p-6 md:p-8 rounded-2xl max-w-md w-full relative shadow-2xl border-t-4 border-green-500 animate-scale-in max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-green-600 transition-colors text-xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>
        {title && <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>}
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );
}

export default PopupModal