const ModelAbilities = require('../models/Abilities')

const createAbilities = (req, res) => {
  ModelAbilities.create(req.body)
    .then((row) => {
      res.status(201).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const findAllAbilities = (req, res) => {
  ModelAbilities.findAll()
    .then(row => res.status(200).send(row))
    .catch(err => res.status(400).send(err.message))
}

const findOneAbilities = (req, res) => {
  ModelAbilities.findOne(req.params.idAbility)
    .then(row => res.status(200).send(row))
    .catch(err => res.status(400).send(err.message))
}

const updateOneAbilities = (req, res) => {
  ModelAbilities.update(req.params.idAbility, req.body)
    .then(row => res.status(200).send(row))
    .catch(err => res.status(400).send(err.message))
}

const destroyOneAbilities = (req, res) => {
  ModelAbilities.destroy(req.params.idAbility)
    .then(() => res.status(204).send())
    .catch(err => res.status(400).send(err.message))
}

const softDeleteOneAbilities = (req, res) => {
  ModelAbilities.softDelete(req.params.idAbility)
    .then(() => { res.status(204).send() })
    .catch(err => { res.status(400).send(err.message) })
}

module.exports = {
  createAbilities,
  findAllAbilities,
  findOneAbilities,
  updateOneAbilities,
  destroyOneAbilities,
  softDeleteOneAbilities
}
