const express = require('express')
const router = express.Router()
const FactsController = require('../controllers/FactsController')
const { catchErrors } = require('../handlers/errorHandlers');

// The main route
router.get('/facts', catchErrors(FactsController.getFacts))

// Submitting a fact
router.get('/facts/add', FactsController.factsForm)
router.post('/facts/add', catchErrors(FactsController.submitFact))

// Editing a Fact
router.get('/facts/:id', catchErrors(FactsController.editFact))
router.post('/facts/:id', catchErrors(FactsController.updateFact))

// Deleting a fact
router.get('/facts/:id/delete', catchErrors(FactsController.deleteFact))



module.exports = router