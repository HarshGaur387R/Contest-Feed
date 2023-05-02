import express from 'express'
import path, { dirname } from 'path'
import fetch from 'node-fetch';
import * as url from 'url';


const app = express();
const port = 3000;

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'contact.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'about.html'));
});


// Define a route that fetches contest data from an external API
app.get('/contests/codeforces', async (req, res) => {
  try {
    const response = await fetch('https://kontests.net/api/v1/codeforces');
    const data = await response.json();
    res.json(data);
    
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching code-forces contests.');
  }
});

app.get('/contests/codechef', async (req, res) => {
  try {
    const response = await fetch('https://kontests.net/api/v1/code_chef');
    const data = await response.json();
    res.json(data);
    
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching code-chef contests.');
  }
});

app.get('/contests/hackerearth', async (req, res) => {
  try {
    const response = await fetch('https://kontests.net/api/v1/hacker_earth');
    const data = await response.json();
    res.json(data);
    
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching hacker_earth contests.');
  }
});

app.get('*.css', (req, res) => {
  res.set('Content-Type', 'text/css');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


// In this example, we're using the express package to create the server, and the path package to help us locate the index.html file. We're also serving any static files (like images or CSS files) from the public directory using express.static().

// To run the server, you would navigate to the Back-End directory in your terminal and run the command node server.js. This would start the server on port 3000, and you could access the website by visiting http://localhost:3000 in your web browser.

// Note that this is just a basic example - you may need to modify the server code to fit your specific requirements (for example, if you need to handle API requests or use a database).
