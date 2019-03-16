const mongoose = require('mongoose')

const schema = mongoose.Schema


let peliculas = new schema({

    name: { type: String },
    url: { type: String },
    img: { type: String }

})


module.exports = mongoose.model('peliculas', peliculas)