const PirateController=require('../controllers/pirates.controller')

module.exports =(app) =>{
    app.get('/api/pirates', PirateController.findAllPirates)
    app.get('/api/pirates/:id', PirateController.findOnePirate)
    app.put('/api/pirates/:id', PirateController.updatePirate)
    app.post('/api/pirates/new', PirateController.createPirate)
    app.delete('/api/pirates/:id', PirateController.deletePirate)
} 