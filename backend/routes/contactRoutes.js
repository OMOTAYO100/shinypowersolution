const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// @route   POST /api/contact
// @desc    Submit a contact form or quote request
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message, type, projectType } = req.body;

    const newMessage = new Message({
      name,
      email,
      phone,
      subject,
      message,
      type,
      projectType
    });

    await newMessage.save();

    // In the future, you can add Nodemailer here to send an email notification
    
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, message: 'Server error, please try again later.' });
  }
});

// @route   GET /api/contact
// @desc    Get all messages (for Admin)
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
