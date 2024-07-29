const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  try {
    const { userId, title, text } = req.body;
    const newComment = new Comment({ userId, title, text });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.error('Error creating comment:', error.message);
    res.status(500).json({ message: 'Error creating comment', error });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('userId');
    res.status(200).json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error.message);
    res.status(500).json({ message: 'Error fetching comments', error });
  }
};
