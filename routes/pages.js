var express = require('express');
var router = express.Router();

// Get Page model
var Page = require('../models/page');
var Product = require('../models/product');

/*
 * GET /
 */
router.get('/', function (req, res) {

    // Page.findOne({slug: 'home'}, function (err, page) {
    //     if (err)
    //         console.log(err);

    //     res.render('index', {
    //         title: page.title,
    //         content: page.content
    //     });
    // });
    Page.findOne({
            slug: 'home'
        })
        .then(page => {
            Product.find({})
                .then(product => {
                    res.render('index', {
                        title: page.title,
                        content: page.content,
                        products: product
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
        })

});

/*
 * GET a page
 */
router.get('/:slug', function (req, res) {

    var slug = req.params.slug;

    Page.findOne({
        slug: slug
    }, function (err, page) {
        if (err)
            console.log(err);

        if (!page) {
            res.redirect('/');
        } else {
            res.render('index', {
                title: page.title,
                content: page.content
            });
        }
    });


});

// Exports
module.exports = router;