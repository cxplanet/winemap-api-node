//routes.js
// routes/index.js

// Mongoose Schema definition
var Schema = mongoose.Schema;
var JsonSchema = new Schema({
    name: String,
    type: Schema.Types.Mixed
});

// Mongoose Model definition
var mapData = mongoose.model('JString', JsonSchema, 'winemap');

var express= require('express')  
var router = express.Router();  
app=express();

router.get('/', function(req,res,next) {  
    res.render('index')
});

// routes/index.js
/* GET layers json data. */
router.get('/layers', function (req, res) {
    mapData.find({},{'name': 1}, function (err, docs) {
        res.json(docs);
    });
});

// routes/index.js
/* GET Map page. */
router.get('/map', function(req,res) {
    mapData.find({},{}, function(e,docs){
        res.render('map', {
            "jmap" : docs,
            lat : 40.78854,
            lng : -73.96374
        });
    });
});

module.exports = router;
