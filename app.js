const express = require('express');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});


app.get('/', (req, res) => {
  res.json({ status: 'API SERVICE is LIVE 🎉', Timestamp: Date.now() });
});

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use(errorHandler);

module.exports = app;