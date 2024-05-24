const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.end('Benvenuto nel mio blog!')
})

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`)
})