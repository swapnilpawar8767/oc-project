const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the public directory
app.use(express.static('public'));

// Fallback for 404s
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
