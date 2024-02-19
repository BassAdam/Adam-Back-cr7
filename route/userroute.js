const express = require('express');
const router = express.Router();
const User = require('../model/usersmodel');

// Route pour s'inscrire :
router.use("/newuser",async (request,response) => {
    const utilisateur = new User({
        lastname: request.body.lastname,
        firstname: request.body.firstname,
        email: request.body.email,
        password: request.body.password
    }) 
    try {
        const newuser = await utilisateur.save();
        response.status(200).json(newuser)
    } catch (error) {
        console.log("erreur", error)
    }
})

// Route pour se connecter :
router.use('/connection', async (request,response) => {
    try {
        const userConnect = await User.find({email:request.body.email,password:request.body.password})
        response.status(200).json(userConnect)
    } catch (error) {
       response.status(404).json({
        "message":"email ou mot de passe incorrect"
       })
    }
} ) 


module.exports = router;