const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    const articles = [
        {
            title: "Dummy Blog 1",
            createdAt: new Date(),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
        },
        {
            title: "Dummy Blog 2",
            createdAt: new Date(),
            description: "Lorem ipsum dolor sit amet, cdnmvbdh ndvjds dsvmdng elit."
        }
    ]
    res.render('articles/index', {articles: articles, title: "Home"});
});

app.listen(3000, () => {
    console.log(`Server is running on port: 3000`);
});