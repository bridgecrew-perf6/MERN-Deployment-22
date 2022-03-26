const mongoose = require('mongoose')

const PiratesSchema = new mongoose.Schema({
    pirateName:{
        type:String,
        required: [true, "{PATH} must be present"],
        minlength: [5, "{PATH} must be at least 5 chars"]
    },
    imageUrl:{
        type:String,
        required: [true, "{PATH} must be present"],

    },
    chests:{
        type:Number,
        required: [true, "{PATH} must be present"],
    },
    pirateCatchPhrase:{
        type:String,
        required: [true, "{PATH} must be present"],
    },
    crewPosition:{
        type:String,
        required: [true, "{PATH} must be present"],
    },
    pegLeg:{
        type:Boolean,
        default:true
    },
    eyePatch:{
        type:Boolean,
        default:true
    },
    hookHand:{
        type:Boolean,
        default:true
    }
}, { timestamps: true })

const Pirate=mongoose.model("Pirates",PiratesSchema)

module.exports = Pirate