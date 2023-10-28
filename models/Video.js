const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
  },
  semester: {
    type: String,
    required: [true, 'must provide semester'],
  },
  description: {
    type: String,
    required: [true, 'must provide description'],
  },
  src: {
    type: String,
    required: [true, 'must provide video src'],
  },
  speakers: [{
    type: String,
    required: [true, 'must provide video speakers'],
  }]
})

module.exports = mongoose.model('Video', VideoSchema)
