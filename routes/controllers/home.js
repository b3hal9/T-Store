
const keys = require('../../config/keys');
const axios = require('axios');

module.exports = Home = (req,res)=>{
    res.render('index',{axios:axios,KhaltiPublishableKey: keys.KhaltiPublishableKey, KhaltiSecretKey: keys.KhaltiSecretKey});
};

