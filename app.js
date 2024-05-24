const express = require("express");
const app = express();
const port = 3000;

const posts = require("./controllers/posts.js");
app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) => {
    res.end(`
    <h1>Benvenuto nel mio blog!</h1>
    <a href="/posts">Vai ai Posts</a>
    `)
})

app.get('/posts', posts.get);

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`)
})