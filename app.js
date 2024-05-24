const express = require("express");
const app = express();
const port = 3000;

const posts = require("./controllers/posts.js");
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.end('Benvenuto nel mio blog!')
})

app.get('/posts', posts.get);

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`)
})