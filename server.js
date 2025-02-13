const express = require('express');
const app = express();
const googleAI = require('./routes/googleAI');
const youtube = require('./routes/youtube');

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

app.use('/googleAI', googleAI);
app.use('/youtube', youtube);

// const server = http.createServer((req, res) => {

//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Hello World!</h1>');

//     res.end();
// });

// const port = 3000;
// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });