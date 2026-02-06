const express = require('express');
const app = express();
const PORT = 3000;

// --------------------
// Middleware
// --------------------
app.use(express.json()); // <-- YOU WERE MISSING THIS

// --------------------
// Import Routes
// --------------------
const postRouter = require('./routes/posts.routes.js');

// --------------------
// Routes
// --------------------
app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

// Mount post router
app.use('/api/v1/posts', postRouter);

// TEMPORARY TEST ROUTE (for error handler)
app.get('/test-error', (req, res, next) => {
  next(new Error('Testing the error handler!'));
});

// --------------------
// Global Error Handler (MUST BE LAST)
// --------------------
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    error: 'Internal Server Error'
  });
};

app.use(errorHandler);

// --------------------
// Server
// --------------------
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
