const mongose = require('mongoose')
const schema = mongose.Schema

let users = new schema({
    obj: { type: Object }

})

module.exports = mongose.model("usuarios", users)