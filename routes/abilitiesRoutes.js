const express = require('express')
const router = express.Router()
const abilitiesController = require('../controllers/abilitiesControllers')

router.post('/abilities', abilitiesControllers.createAbilities)
router.get('/abilities', abilitiesControllers.findAllAbilities)
router.get('/abilities/:idAbilities', abilitiesControllers.findOneAbilities)
router.patch('/abilities/:idAbilities', abilitiesControllers.updateOneAbilities)
router.delete('/abilities/:idAbilities', abilitiesControllers.softDeleteOneAbilities)
router.delete('/abilities/destroy/:idAbilities', abilitiesControllers.destroyOneAbilities)

module.exports = router
