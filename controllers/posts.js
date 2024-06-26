const {readJSON, writeJSON} = require('../utils')

module.exports = {
    get: (req, res) => {
        const posts = readJSON('posts');
        res.format({
            html: () => {
                let html = '<div>';
                posts.forEach(post => {
                    html += `
                        <div>
                            <img width="400px" src="/${post.image}"/>
                            <h2>${post.title}</h2>
                            <p>${post.content}</p>
                        </div>
                    `;
                    post.tags.forEach(tag => html += `<span>#${tag}</span>`);
                });
                html += `
                <div>
                    <a href="/">Torna alla home</a>
                </div>
                `;
                html += '</div';
                res.send(html)
            },
            json: () => {
                res.json(posts);
            }
        })
    },
    post: (req, res) => {
        const posts = readJSON('posts');
        writeJSON('posts', [...posts, req.body]);
        res.send('Post avvenuto con successo')
    }
}