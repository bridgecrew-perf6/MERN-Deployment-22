const Pirate = require('../models/pirates.model')


module.exports = {
    findAllPirates: (request, response) => {
        Pirate.find().collation({locale:'en', strength:2}).sort({pirateName:1})
            .then(allPirates => response.json({ pirates: allPirates }))
            .catch(error => response.status(400).json(error))
    },

    createPirate: (request, response) => {
        Pirate.create(request.body)
            .then(newPirate => (response.json({pirate:newPirate})))
            .catch(error => response.status(400).json(error))

    },
    findOnePirate: (request, response) => {
        Pirate.findOne({ _id: request.params.id })
            .then(pirate => response.json({pirate:pirate}))
            .catch(error => response.status(400).json(error))

    },
    updatePirate: (request, response) => {
        Pirate.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { new: true, runValidators: true }
        ).then(updatedPirate => response.json({pirate: updatedPirate }))
            .catch(error => response.status(400).json(error))

    },
    deletePirate: (request, response) => {
        Pirate.deleteOne({ _id: request.params.id })
            .then(result => response.json({ result: result }))
            .catch(error => response.status(400).json(error))

    },
}