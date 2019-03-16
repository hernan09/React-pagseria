const mongose = require('mongoose')
const schema = mongose.Schema

let users = new schema({
    user: { type: String },
    pass: { type: String }

})

module.exports = mongose.model("usuario", users)