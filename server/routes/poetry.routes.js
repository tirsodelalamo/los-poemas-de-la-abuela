const express = require("express");
const router = express.Router();
const passport = require("passport");

const Poetry = require("../models/poetry.model");

router.post("/crear-poesia", (req, res, next) => {

  Poetry.create(req.body)
    .then((response) => res.json(response))
    .catch((err) => next(err));
});

router.get('/listado-poesias', (req, res, next) => {

    Poetry.find()
      .then((response) => res.json(response))
      .catch((err) => next(err));
})

router.get('/poema/:id', (req, res, next) => {

  Poetry.findById(req.params.id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.delete("/poema/:id/delete", (req, res, next) => {

  Poetry.findByIdAndDelete(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => next(err));
});

router.put('/:id/editar-poema', (req, res, next) => {
  console.log(req.body)
  console.log(req.params)

  const { title, body, tags } = req.body
  
  Poetry.findByIdAndUpdate(req.params.id, { title, body, tags }, { new: true })
    .then((poetry) => res.json(poetry))
    .catch((error) => console.log(error));
})

module.exports = router;
