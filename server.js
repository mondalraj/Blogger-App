const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    res.render('index', {title: "Home Page"});
});

app.listen(3000, () => {
    console.log(`Server is running on port: 3000`);
});