const express = require('express')
const router = express.Router()
const FactsController = require('../controllers/FactsController')
const { catchErrors } = require('../handlers/errorHandlers');

// The main route
router.get('/facts', catchErrors(FactsController.getFacts))

// Submitting a fact
router.get('/facts/add', FactsController.factsForm)
router.post('/facts/add', catchErrors(FactsController.submitFact))

// Getting fact by id
router.get('/facts/:id', catchErrors(FactsController.getFactById))

// Editing a Fact
router.get('/facts/:id/edit', catchErrors(FactsController.editFact))
router.post('/facts/:id/edit', catchErrors(FactsController.updateFact))

// Deleting a fact
router.get('/facts/:id/delete', catchErrors(FactsController.deleteFact))

module.exports = router