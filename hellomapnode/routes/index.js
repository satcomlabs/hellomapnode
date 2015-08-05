var express = require('express');
var router = express.Router();

/* GET Google Maps page. */
router.get('/googlemap', function(req, res) {
    res.render('googlemap', { title: 'Google Map View' });
});

/* GET ESRI Maps page. */
router.get('/esrimap', function(req, res) {
    console.log("rendering esrimap");
    res.render('esrimap', { title: 'ESRI Map View' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Inmarsat Maps Example'});
});


module.exports = router;
