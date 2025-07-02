const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the public directory
app.use(express.static('public'));

// Optional: 404 fallback
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
