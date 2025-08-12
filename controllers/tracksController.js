const Track = require('../models/Track')

// post for create
async function createTrack(req,res) {
    try {
        const newTrack = await Track.create(req.body)
        res.status(201).json(newTrack)
    } catch (error) {
        console.log(error)
        res.status(500).json({error : error.message})
    }
}

// get list of all tracks
async function getAllTracks(req,res) {
    try {
        const allTracks = await Track.find()
        if(allTracks){
            res.status(200).json(allTracks)
        }else{
            res.sendStatus(204)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error : error.message})
    }
}

// get single track
async function getOneTrack(req,res) {
    try {
        const track = await Track.findById(req.params.id)
        if(track){
            res.status(200).json(track)
        }else{
            res.sendStatus(404)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error : error.message})
    }
}

// put for updating track
async function updateTrack(req,res) {
    try {
        const track = await Track.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        if(track){
            res.status(200).json(track)
        }else{
            res.sendStatus(404)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error : error.message})
    }
}

// delete to delete a track
async function deleteTrack(req,res) {
    try {
        const track = await Track.findByIdAndDelete(req.params.id)
        if(track){
            res.status(200).json(track)
        }else{
            res.sendStatus(404)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error : error.message})
    }
}

module.exports = {
    createTrack,
    getAllTracks,
    getOneTrack,
    updateTrack,
    deleteTrack
}
