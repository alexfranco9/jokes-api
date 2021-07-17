const Joke = require("../models/jokes.model");

// BASIC CRUD COMMANDS

// CREATE
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({ message: "Something went wrong when creating a Joke!!", error: err}))
}

// READ ONE
module.exports.findOneJoke = (req, res) => {
    Joke.find({_id: req.params._id})
        .then(singleJoke => res.json(singleJoke))
        .catch(err => res.json({ message: "Something went wrong when finding one Joke!!", error: err}))
}

// READ ALL
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json({ message: "Something went wrong when finding all the Joke!!", error: err}))
}

// UPDATE
module.exports.updateJokes = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json({ message: "Something went wrong when updating the Joke!!", error: err}))
}

// DELETE
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(deletedJoke => res.json(deletedJoke))
        .catch(err => res.json({ message: "Something went wrong when deleting the Joke!!", error: err}))
}