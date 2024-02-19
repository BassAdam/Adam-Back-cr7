const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoute = require('./route/userroute')

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors ());
mongoose.connect('mongodb://127.0.0.1:27017/cr7data');

const db = mongoose.connection;
db.on('error', (error) => console.log('voici une erreur: ', error));
db.once('open', () => console.log('connexion établie'));

app.use('/userRoute', userRoute)

app.listen(port, () => console.log("l'ecoute est sur le port: ", port));

