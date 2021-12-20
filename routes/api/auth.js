const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const {check , validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config');
const bcrypt = require('bcryptjs')

const User = require('../../models/User')

// @route GET api/auth
// @desc Test route
// @access Public
router.get('/' , auth , async(req , res) =>{
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }
});


// @route POST api/auth
// @desc Authenticate User and get token
// @access Public
router.post('/' , [
    check('username' , 'Username cannot be empty').not().isEmpty(),
    check('password' , 'Password field cannot be empty').not().isEmpty()
], async(req , res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errs : errors.array()})
    }

    // See if user exists
    const {username , password} = req.body;
    
    try {
        
        let user = await User.findOne({username})
        if (!user){
            return res.status(400).json({errors : [{msg : "Invalid Credentials"}]});
        }

        const isMatch = await bcrypt.compare(password , user.password);

        if (!isMatch){
            return res.status(400).json({errors : [{msg : "Invalid Credentials"}]});
        } 

        const payload = {
            user : {
                id : user.id
            }
        }

        jwt.sign(payload , config.get('jwtSecret') ,  {expiresIn : 360000} , (err , token) => {
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


module.exports = router