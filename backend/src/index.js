const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // Importa jsonwebtoken
const userRoutes = require('./routes/userRoutes');
const commentRoutes = require('./routes/commentRoutes');
const Comment = require('./models/Comment');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myblog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

// Socket.io connection
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, 'your_jwt_secret');
      socket.userId = decoded.userId;
    } catch (error) {
      return next(new Error('Authentication error'));
    }
  }
  next();
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.userId);

  socket.on('create-comment', async (comment) => {
    if (!socket.userId) {
      return; // No permitir crear comentario sin usuario autenticado
    }

    if (!comment.text) {
      return; // No permitir crear comentario sin texto
    }

    const newComment = new Comment({
      ...comment,
      userId: socket.userId
    });

    await newComment.save();
    io.emit('new-comment', newComment);
    console.log('Comment created:', newComment);
  });

  socket.on('delete-comment', async (commentId) => {
    await Comment.findByIdAndDelete(commentId);
    io.emit('comment-deleted', commentId);
    console.log('Comment deleted:', commentId);
  });

  socket.on('get-comments', async () => {
    const comments = await Comment.find().populate('userId', 'username');
    socket.emit('all-comments', comments);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
