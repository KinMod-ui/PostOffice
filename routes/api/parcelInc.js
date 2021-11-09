const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator');
const auth = require('../../middleware/auth');
const ParcelIncoming = require('../../models/ParcelIncoming');
const User = require('../../models/User');

// @route POST api/parcelInc
// @desc Create an incoming parcel
// @access Private
router.post('/' , [auth , [
    check('PackageDescription' , 'Please enter a description for your package').not().isEmpty(),
    check('username' , 'Please enter ').not().isEmpty(),
]] , async(req , res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }

    try {

        const user = await User.findOne({username : req.body.username}).select('-password');

        const reqUser = await User.findById(req.user.id).select('-password');
        
        if (!user){
            return res.status(400).json({msg : "User doesn't exist"})
        }

        if (reqUser.type !== 'Incoming Handler' && reqUser.type !== 'Admin'){
            return res.status(401).json({msg : "User not authroized"})
        }

        const newParcelInc = new ParcelIncoming({
            PackageDescription : req.body.PackageDescription,
            user , 
            Status : "Not Picked"
        })

        const parcel = await newParcelInc.save();

        res.json(parcel);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// @route GET api/parcelInc/parcel/:id
// @desc Get parcelInc by id
// @access Private
router.get('/parcel/:id' , auth , async (req , res) => {
    try{
        const parcel = await ParcelIncoming.findById(req.params.id);
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

// @route GET api/parcelInc
// @desc Get all the incoming parcels of the current user
// @access Private
router.get('/' , auth , async (req , res) => {
    try{
        const parcels = await ParcelIncoming.find({user : req.user.id});
        res.json(parcels)

    } catch(err){
        console.error(err.message);
        if (err.kind === 'ObjectId'){
            return res.status(404).json({msg : "Parcel Not found"})
        }
        res.status(500).send("Server Error")
    }
})

// @route DELETE api/parcelInc/:id
// @desc Delete parcelInc by id
// @access Private
router.delete('/:id' , auth , async (req , res) => {
    try{
        const parcel = await ParcelIncoming.findById(req.params.id);
        if (!parcel){
            return res.status(404).json({msg : "Parcel Not found"})
        }
        const user = await User.findById(req.user.id);
        if (user.type !== 'Incoming Handler' && user.type !== 'Admin'){
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

// @route POST api/parcelInc/picked/:id
// @desc Add picking a parcel
// @access Private
router.post('/picked/:id' , [auth , 
    [check('pickedBy' , 'Picked By field cannot be left empty.').not().isEmpty()
    ]] , async(req , res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }

    try {
        const parcel = await ParcelIncoming.findById(req.params.id);
        const user = await User.findById(req.user.id).select('-password');

        if (!parcel){
            return res.status(404).json({msg : "Parcel Not found"})
        }

        if (user.type !== 'Incoming Handler' && user.type !== 'Admin'){
            return res.status(401).json({msg : "User not authroized"})
        }

        // Check if the parcel has already been picked
        if (parcel.Status === 'Picked'){
            return res.status(400).json({msg : `Parcel has already been picked : ${parcel.PickedBy} at ${parcel.PickedAt}`})
        }

        // const PickedDetails = ({
        //     PickedBy : req.body.text,
        //     PickedAt : Date.now()
        // })

        parcel.PickedBy = req.body.pickedBy;
        parcel.PickedAt = Date.now();
        parcel.Status = 'Picked'

        await parcel.save();

        res.json(parcel)

    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId'){
            return res.status(404).json({msg : "Parcel Not found"})
        }
        res.status(500).send('Server Error');
    }
})

// @route DELETE api/parcelInc/picked/:id
// @desc Delete picking a parcel
// @access Private
router.delete('/picked/:id' , auth , async(req , res) => {

    try {
        const parcel = await ParcelIncoming.findById(req.params.id);
        const user = await User.findById(req.user.id).select('-password');

        if (!parcel){
            return res.status(404).json({msg : "Parcel Not found"})
        }

        if (user.type !== 'Incoming Handler' && user.type !== 'Admin'){
            return res.status(401).json({msg : "User not authroized"})
        }

        // Check if the parcel has not been picked
        if (parcel.Status === 'Not Picked'){
            return res.status(401).json({msg : `Parcel has not been picked.`})
        }

        parcel.PickedBy = undefined;
        parcel.PickedAt = undefined;
        parcel.Status = 'Not Picked'

        await parcel.save();

        res.json(parcel);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId'){
            return res.status(404).json({msg : "Parcel Not found"})
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router