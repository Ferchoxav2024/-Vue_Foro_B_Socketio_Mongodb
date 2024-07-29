const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true } // asumiendo que también quieres guardar el título
});

module.exports = mongoose.model('Comment', commentSchema);
