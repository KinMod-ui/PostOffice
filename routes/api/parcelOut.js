const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator');
const auth = require('../../middleware/auth');
const ParcelOutgoing = require('../../models/ParcelOutgoing');
const User = require('../../models/User');

var phoneno = /^\d{10}$/;
var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// @route POST api/parcelOut
// @desc Create an outgoing parcel
// @access Private
router.post('/' , [auth , [
    check('SenderName' , `Please enter Sender's name`).not().isEmpty(),
    check('SenderLine1' , `Address' Line 1 cannot be left empty`).not().isEmpty(),
    check('SenderCity' , `Please enter Sender's city`).not().isEmpty(),
    check('SenderState' , `Please enter Sender's State`).not().isEmpty(),
    check('SenderPinCode' , `Please enter Sender's PinCode`).not().isEmpty(),
    check('SenderEmail').custom((email) => {
        return ((email.match(mailformat)))
    }).withMessage(`Please enter a valid email-id`),
    check('SenderMobile').custom((val) => {
        return (val.match(phoneno))
    }).withMessage('Please enter a valid phone number of sender'),
    check('RecieverName' , `Please enter Reciever's name`).not().isEmpty(),
    check('RecieverLine1' , `Address' Line 1 cannot be left empty`).not().isEmpty(),
    check('RecieverCity' , `Please enter Reciever's city`).not().isEmpty(),
    check('RecieverState' , `Please enter Reciever's State`).not().isEmpty(),
    check('RecieverPinCode' , `Please enter Reciever's PinCode`).not().isEmpty(),
    check('RecieverMobile').custom((val) => {
        return (val.match(phoneno))
    }).withMessage('Please enter a valid phone number of reciever')

]] , async(req , res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        const errMsg = errors.array().map(err => err.msg)
        // console.log(errMsg)
        return res.status(400).json({errors : errMsg})
    }

    try {
        body = req.body
        // console.log(body)
        const newParcelOut = new ParcelOutgoing({
            user : body.user,
            SenderDetails : {
                name : body.SenderName,
                Address : {
                    Line1 : body.SenderLine1,
                    Line2 : body.SenderLine2,
                    City : body.SenderCity,
                    State : body.SenderState,
                    PinCode : body.SenderPinCode
                },
                email : body.SenderEmail,
                MobNumber : body.SenderMobile
            },
            RecieverDetails : {
                name : body.RecieverName,
                Address : {
                    Line1 : body.RecieverLine1,
                    Line2 : body.RecieverLine2,
                    City : body.RecieverCity,
                    State : body.RecieverState,
                    PinCode : body.RecieverPinCode
                },
                MobNumber : body.RecieverMobile
            },
            Picked : body.Picked,
            PackageDescription : body.PackageDescription,
            PackageWeight : body.PackageWeight,
            Price : body.Price,
            ExtraComments : body.ExtraComments,DispatchStatus : body.DispatchStatus
        })

        const parcel = await newParcelOut.save();

        res.json(parcel);

    } catch (err) {
        // console.log(err);
        res.status(500).send("Server Error");
    }
});

// @route GET api/parcelOut/parcel/:id
// @desc Get parcelOut by id
// @access Private
router.get('/parcel/:id' , auth , async (req , res) => {
    try{
        const parcel = await ParcelOutgoing.findById(req.params.id);
        if (!parcel){
            return res.status(404).json({msg : "Parcel Not found"})
        }
        res.json(parcel)
    } catch(err){
        console.error(err.message);
        if (err.kind === 'ObjectId'){
            return res.status(404).json({msg : "Parcel Not found"})
        }
        res.status(500).send("Server Error")
    }
})

// @route GET api/parcelOut
// @desc Get all the outgoing parcels of the current user
// @access Private
router.get('/' , auth , async (req , res) => {
    try{
        const user = await User.findById(req.user.id)
        const parcels = await ParcelOutgoing.find({user : user.username});
        // console.log(req.user);
        res.json(parcels)
    } catch(err){
        console.error(err.message);
        if (err.kind === 'ObjectId'){
            return res.status(404).json({msg : "Parcel Not found"})
        }
        res.status(500).send("Server Error")
    }
})

// @route GET api/parcelOut/All
// @desc Get all the outgoing parcels of all the users
// @access Private
router.get('/All' , auth , async (req , res) => {
    try{
        const parcels = await ParcelOutgoing.find().sort({ date: -1 });
        res.json(parcels)
    } catch(err){
        console.error(err.message);
        if (err.kind === 'ObjectId'){
            return res.status(404).json({msg : "No Parcel exists"})
        }
        res.status(500).send("Server Error")
    }
})

// @route DELETE api/parcelOut/:id
// @desc Delete parcelOut by id
// @access Private
router.delete('/:id' , auth , async (req , res) => {
    try{
        const parcel = await ParcelOutgoing.findById(req.params.id);
        if (!parcel){
            return res.status(404).json({msg : "Parcel Not found"})
        }
        if (parcel.user.toString() !== req.user.id){
            return res.status(401).json({msg : "User not authroized"})
        }
        
        await parcel.remove();
        res.json({msg : "Parcel removed"})
    } catch(err){
        console.error(err.message);
        if (err.kind === 'ObjectId'){
            return res.status(404).json({msg : "Parcel Not found"})
        }
        res.status(500).send("Server Error")
    }
})

// @route POST api/parcelOut/:id
// @desc Update the details of a parcel
// @access Private
router.post('/:id' , [auth , 
    [
        check('DispatchStatus' , 'Dispatch Status can either be Dispatched or Not Dispatched').isIn(["" , "Dispatched" , "Not Dispatched"]),
        check('Picked' , 'Picked can either be Picked or Not Picked').isIn(["" , "Picked" , "Not Picked"]),
        check('PackageWeight' , 'Weight should be a number').isNumeric(),
        check('Price' , "Price should be a number").isNumeric()

]] , async(req , res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){

        const errMsg = errors.array().map(err => err.msg)
        // console.log(errMsg)
        return res.status(400).json({errors : errMsg})
    }

    try {

        const parcel = await ParcelOutgoing.findById(req.params.id);
        const user = await User.findById(req.user.id).select('-password');

        if (!parcel){
            return res.status(404).json({msg : "Parcel Not found"})
        }

        body = req.body
        body.price = parseInt(body.Price,10);
        if (user.type !== 'OutGoing Handler' && user.type !== 'Admin'){
            
            return res.status(401).json({msg : "User not authroized"});
        }

        // if (){
        //     return res.status(401).json({msg : "User not authroized"});
        // }

        Object.assign(parcel
        ,{
            PackageWeight : body.PackageWeight,
            Price : body.Price,
            DispatchStatus : body.DispatchStatus,
            Picked : body.Picked
        })

        const newParcel = await parcel.save();

        res.json(newParcel);

    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId'){
            return res.status(404).json({msg : "Parcel Not found"})
        }
        res.status(500).send('Server Error');
    }
})

module.exports = router