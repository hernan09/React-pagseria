const mongoose = require('mongoose')
const pagination = require('mongoose-paginate-v2')
const schema = mongoose.Schema



let peliculas = new schema({

    name: { type: String },
    url: { type: String },
    img: { type: String }

})
peliculas.plugin(pagination)

let myModel = mongoose.model('peliculas', peliculas);



module.exports = myModel