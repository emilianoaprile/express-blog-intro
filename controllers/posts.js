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
                            <img src="/${post.image}"/>
                            <h2>${post.title}</h2>
                            <p>${post.content}</p>
                        </div>
                    `;
                    post.tags.forEach(tag => html += `<span>#${tag}</span>`);
                });
                html += '</div';
                res.send(html)
            }
        })
    }
}