// server.mjs
import { createServer } from 'node:http';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'node:url';

const _fileURLToPath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_fileURLToPath) // C:/Warm-Up

// console.log("fileURL ", _fileURLToPath);

// App is not defined so we define app 
console.log(path.dirname(_fileURLToPath))


console.log(__dirname + '/public/index.html')

const app = express();

// Serving static files
app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));

// Serving a static HTML 
app.get('/index', (req, res) => {
  // response to the request http://127.0.0.0/
    res.sendFile(path.join(__dirname, 'public'));
});

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
// const server = createServer((req, res) => { ....})
app.listen(3000, '127.0.0.1', () => {
  console.log('Listening on http://127.0.0.1:3000');
});

// run with `node server.mjs`
