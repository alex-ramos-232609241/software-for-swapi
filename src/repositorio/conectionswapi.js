'use strict';
//Imports
let axios = require('axios')
const callswapiConfig = require('./urlconfig');
let urlbase = callswapiConfig.API_ROOT_MAIN;


async function conectionSwapi(ruta){

        console.log("***urlbase")
        console.log(urlbase)
        console.log("***/urlbase")
    
        let res = await axios.get(urlbase.endpoint+ruta);
        return res.data;
    }

module.exports = {
    conectionSwapi
}  

