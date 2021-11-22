const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParcelIncomingSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'user'
    },
    name : {
        type : String
    },
    username : {
        type : String
    },
    PackageDescription : {
        type : String,
        required : true
    },
    Status : {
        type : String,
        default : 'Not Picked',
        enum : ['Not Picked' , 'Picked']
    },
    PickedBy : {
        type : String,
    },
    PickedAt : {
        type : Date
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = ParcelIncoming = mongoose.model('ParcelInc' , ParcelIncomingSchema);