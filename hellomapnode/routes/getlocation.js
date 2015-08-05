var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;

var args ={
        headers:{"Authorization":"A4mdOtMrpxrBkirw9Rir5H1CJz5d8XKZ"} // request headers for the API sandbox 
      };


router.get('/', function (req, res) {
    console.log("succesfully called the route yes");
    // send the API request
    client = new Client();
    
    client.get("https://api-sandbox.inmarsat.com/v1/application/currentuser/location", args,
        function(data, response){
        // convert xml response to json
        console.log("JSON returned: "+JSON.stringify(data,null,4));
        res.send(JSON.stringify(data,null,4));
        });
});
           
module.exports = router;