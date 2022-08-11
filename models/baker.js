// dependencies
const Bread = require ('./bread')
const mongoose = require('mongoose')
const baker = require('../controllers/bakers_controller')
const { Schema } = mongoose

// schema
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    }, 
    startDate: {
        type: Date,
        required: true
    },
    bio: String
}, {toJSON: {virtuals:true}})

//Virtuals
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

//Hooks
bakerSchema.post('findOneAndDelete', function() {
    Bread.deleteMany({baker: this._conditions._id})
    .then(deleteStatus => {
        console.log(deletedStatus)
    })
})

// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker