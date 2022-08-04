//require mongoose
const mongoose = require('mongoose')
//creating shorthand for the Schema constructor
const { Schema } = mongoose

//schema
const breadSchema = new Schema ({
  name: { type: String, required: true },
  hasGluten: Boolean, 
  image: { type: String, default: 'https://as2.ftcdn.net/v2/jpg/04/10/47/07/1000_F_410470744_OcFbEYsYnk0u6UBVIhfLyROIbNsCDP2R.jpg'},
  baker: {
    type: String,
    enum: ['Rachel', 'Monica', 'Joey', 'Chanedler', 'Ross', 'Phoebe']
  }
})

//model and export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread