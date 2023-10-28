const Video = require('../models/Video');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getTracksFromSeason = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const videos = await Video.find({ semester: id })
  res.status(200).json({ videos })
});

const getTrack = asyncWrapper(async (req, res, next) => {
  const { id: videoID } = req.params
  const video = await Video.findOne({ _id: videoID })
  if (!video) {
    return next(createCustomError(`No video with id : ${videoID}`, 404))
  }

  res.status(200).json({ video })
});

module.exports = {
  getTracksFromSeason,
  getTrack,
}
