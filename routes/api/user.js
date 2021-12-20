const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config');
const bcrypt = require('bcryptjs');

const User = require('../../models/User')
const auth = require('../../middleware/auth');

const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// @route POST api/users
// @desc Register user
// @access Public
router.post('/' , [
    check('name' , 'Name is required').not().isEmpty(),
    check('username' , 'Username cannot be empty').not().isEmpty(),
    check('password' , 'Password field cannot be empty').not().isEmpty(),
    check('email').custom((email) => {
        return (email.match(mailformat))
    }).withMessage(`Please enter a valid email-id`),
], async(req , res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errs : errors.array()})
    }

    // See if user exists
    const {name , username , password , email} = req.body;
    const type = "Normal";
    try {
        
        let user = await User.findOne({username})
        if (user){
            return res.status(400).json({errors : [{msg : 'User already exists'}]})
        }

        user = new User({
            name,
            username,
            password,
            email,
            type
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password , salt);

        await user.save();

        const payload = {
            user : {
                id : user.id
            }
        }
        jwt.sign(payload , config.get('jwtSecret') ,  {
            expiresIn : 360000
        } , (err , token) => {
            if (err)throw err;
            res.json({token});
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

    // Encrypt password

    // return jsonwebtoken
});

// todo -> Update user's details

// @route GET api/users/email/:username
// @desc Get email of the user
// @access Private
router.get('/email/:username' , auth , async(req , res) => {
    try {
        const user = await User.findOne({username : req.params.username} , {email : 1 , _id : 0});
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }
});

// @route PATCH api/users/type/:username
// @desc Updates the type of user whose username is given
// @access private
router.patch('/type/:username' , [auth , [check('type' , 'Type must be one of Normal/Admin/Incoming Handler/OutGoing Handler').isIn(['Normal' , 'Admin' , 'Incoming Handler' , 'OutGoing Handler'])
]] , async(req , res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }

    try{
        const mainUser = await User.findById(req.user.id);
        const toChangeUser = await User.findOne({username : req.params.username});

        // console.log("wowowow" ,toChangeUser)

        if (mainUser.type !== 'Admin'){
            return res.status(401).json({msg : "User not authroized"})
        }

        if (!toChangeUser){
            return res.status(400).json({msg : "User doesn't exist"})
        }

        toChangeUser.type = req.body.type;
        toChangeUser.save();

        res.json(toChangeUser.username);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});


module.exports = router