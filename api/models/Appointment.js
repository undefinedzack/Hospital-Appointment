const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  appointments: {
    type: Array
  }
})

module.exports = mongoose.model('Appointment', appointmentSchema)