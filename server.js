const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "public" folder
app.use(express.static('public'));

// Default route
app.get('/', (req, res) => {
  res.send('Hello, World! This is my Node.js app.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
