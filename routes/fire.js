var express = require('express');
var router = express.Router();
var unirest = require('unirest');
/* GET home page. */
router.post('/', function(req, res) {
  
  //fire the rocket!
  //TODO: NEVER place your actual spark core access_token in your file
  unirest.post('https://api.spark.io/v1/devices/<SPARK_CORE_ID>/cycleRelay')
  .send('access_token=<SPARK CORE ACCESS_TOKEN>')
  .send('params=r1,1500')
  .end(function(response){
    
    if(response.error){
      console.error(response.error);
      return res.send(500, response.error);
    }
    
    return res.render('index', { title: 'Rocket Fired!' });
  });
  
  
});

module.exports = router;
