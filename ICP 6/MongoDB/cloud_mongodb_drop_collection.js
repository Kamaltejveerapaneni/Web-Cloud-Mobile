/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://kamaltejveerapaneni:Kamaltej78@ds117929.mlab.com:17929/demo';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("demo");
    dbase.dropCollection("lesson6", function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});