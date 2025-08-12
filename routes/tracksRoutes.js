const router = require('express').Router()
const tracksController = require('../controllers/tracksController')

router.post('/', tracksController.createTrack)
router.get('/', tracksController.getAllTracks)
router.get('/genres', tracksController.seeTracksGenre)
router.get('/:id', tracksController.getOneTrack)
router.put('/:id', tracksController.updateTrack)
router.delete('/:id', tracksController.deleteTrack)

module.exports = router