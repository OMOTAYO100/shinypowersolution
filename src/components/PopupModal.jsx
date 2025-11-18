import React from 'react'

function PopupModal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null; 
  return (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-600 p-6 md:p-8 rounded-xl max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-white font-semibold"
          onClick={onClose}
        >
          ✕
        </button>
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  )
}

export default PopupModal