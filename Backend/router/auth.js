const express = require("express");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate')

const router = express.Router();

require("../db/connection");

router.get("/", (req, res) => {
  res.send(`Hello Router`);
});

//using promises

// router.post("/register", (req, res) => {

//     const {name,email,phone,password,cpassword} = req.body;

//     if(!name || !email || !phone || !password || !cpassword){
//         return res.status(422).json({error:"plz fill all the fields properly"})
//     }

//     User.findOne({email:email})
//     .then((userexists) =>{
//         if(userexists){
//             return res.status(422).json({error:"emailid already exists"})
//         }

//         const user = new User({name,email,phone,password,cpassword})

//         user.save().then(() =>{
//             res.status(201).json({message:"user registered successfully"})
//         }).catch((err) =>{
//             res.status(500).json({error:"Failed to register"})
//         })
//     }).catch(err=>{console.log(err)})

// })

//using async-await

router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "plz fill all the fields properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "emailid already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Passwords are not matched" });
    } else {
      const user = new User({ name, email, phone, password, cpassword });

      await user.save();
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//login route

router.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ error: " Filled the data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
       
       token = await userLogin.generateAuthToken()

       res.cookie("jwtoken", token, {
          expires:new Date(Date.now() + 25892000000),
          httpOnly:true
       })

      if (!isMatch) {
        res.status(400).json({ msg: "User login error" });
      } else {
        res.json({ msg: "User login successfully" });
      }
    } else {
      res.status(400).json({ msg: "User login error" });
    }
  } catch (error) {
    console.log(error);
  }
});

//faq

router.get('/faq', authenticate ,(req, res) => {
  res.send(req.rootUser)
})
module.exports = router;
