const router = require('express').Router();
 

const payment = require('./controllers/payment');
const Home = require('./controllers/home');




router.get('/',Home);




module.exports = router;