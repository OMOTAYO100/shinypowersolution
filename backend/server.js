const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const productRoutes = require('./routes/productRoutes');
const chatRoutes = require('./routes/chatRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

// Make io accessible inside routes
app.set('io', io);

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Routes
app.use('/api/products', productRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/contact', contactRoutes);

// --- SERVE FRONTEND IN PRODUCTION ---
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../my-react-project/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../my-react-project/dist', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Backend Error:", err);
  res.status(500).json({ message: err.message || "Internal Server Error", details: err });
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT} with WebSocket`);
    });
  })
  .catch((error) => {
    console.error('❌ Error connecting to MongoDB:', error.message);
  });
