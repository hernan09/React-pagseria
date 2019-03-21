const express = require('express')
const peliculas = require('./Schema')
const usuarios = require('./schemaUsers')
const mongoose = require('mongoose')
const path = require('path')
const BodyParser = require('body-parser')
const app = express()



app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.setHeader('Content-Type', 'application/json')

    next()
})
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, 'public')))

let port = process.env.PORT || 4000

mongoose.connect("mongodb://localhost:27017/peliculas", {
    useNewUrlParser: true
}, (err) => {
    if (err) console.log(`${err}`)
    console.log('se a conectado a la base de datos')

    app.listen(port, (err) => {
        if (err) console.log(`${err}`)

        console.log(`http://localhost:${port}`)
    })
})


app.get(`/pelis`, (req, res) => {

    var pageOptions = {
        page: parseInt(req.query.page || 1),
        limit: parseInt(req.query.limit || 10)
    }

    peliculas.find()
        .skip(pageOptions.page * pageOptions.limit)
        .limit(pageOptions.limit)
        .exec(function(err, peliculas) {
            if (err) {
                res.status(500).json(err);
                return;
            };
            res.status(200).json({
                pelis: peliculas
            });
        })




})

app.delete("/delete/:id", (req, res) => {
    let id = req.params.id
    peliculas.findOneAndDelete(id, (err, peliculaEliminada) => {
        if (err) res.status(500).send(`${err}`)
        if (!peliculas) res.status(404).send(`no se encontro la pelicula`)
        res.status(200).send({ peliculaEliminada })
    })

})

app.get("/pelis/id", (req, res) => {
    let id = req.params.id

    peliculas.findById(id, (err, pelicula) => {

        if (err) res.status(500).send(`${err}`)

        if (!pelicula) res.status(404).send(`no se encontro la pelicula`)

        res.status(200).send({
            pelicula
        })
    })

})

app.post("/usuarios", (req, res) => {

    console.log("req.body.obj", req.body.obj)

    let usuario = new usuarios({
        /* user: req.body.user,
         pass: req.body.pass*/
        obj: req.body.obj
    })

    usuario.save((err, usertSave) => {

        if (err) res.status(500).send(`${err}`)
        res.status(200).send({
            usertSave
        })
    })

})