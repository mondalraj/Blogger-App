const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('articles/new', {title: "Create New Blog"});
});


module.exports = router;