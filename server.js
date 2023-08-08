const express = require('express');
const app = express();
const port = 3000;

// Set up EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/privacy', (req, res) => {
    res.render('privacy');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
