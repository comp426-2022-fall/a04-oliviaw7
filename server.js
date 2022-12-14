import { roll } from "./lib/roll.js"

import minimist from "minimist"
import express from "express"

var app = express(); 
app.use(express.urlencoded({extended: true}))

var args = minimist(process.argv.slice(2))

var port = 5000

var sides = 6
var dice = 2
var rolls = 1

if ("port" in args) {
    port = args.port
}

app.get('/app/', (req, res) => {
    res.send("200 OK")
})

app.get('/app/roll/', (req, res) => {
    sides = 6
    dice = 2 
    rolls = 1
    res.send(roll(sides, dice, rolls))
})

app.post('/app/roll/', (req, res) => {
    sides = parseInt(req.body.sides)
    dice = parseInt(req.body.dice)
    rolls = parseInt(req.body.rolls)
    res.send(roll(sides, dice, rolls))
})

app.get('/app/roll/:sides/', (req, res) => {
    sides = parseInt(req.params.sides)
    dice = 2
    rolls = 1
    res.send(roll(sides, dice, rolls))
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
    sides = parseInt(req.params.sides)
    dice = parseInt(req.params.dice) 
    rolls = 1
    res.send(roll(sides, dice, rolls))
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    sides = parseInt(req.params.sides)
    dice = parseInt(req.params.dice) 
    rolls = parseInt(req.params.rolls)
    res.send(roll(sides, dice, rolls))
})

app.use(function(req, res) {
    res.send("404 NOT FOUND")
})

app.listen(port)