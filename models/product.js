var mongoose = require('mongoose');

// Product Schema
var ProductSchema = mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    
    location: {
        type: String,
        required: true
    },
    goods: {
        type: String,
        required: true
    },
    open_time: {
        type: String,
        required: true
    },
    close_time: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
    
});

var Product = module.exports = mongoose.model('Product', ProductSchema);

