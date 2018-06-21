/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://kamaltejveerapaneni:Kamaltej78@ds117929.mlab.com:17929/demo';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("demo");
    var myquery = { address: /^S/ };
    var newvalues = {$set: {name: "Kamal Tej"} };
    var myoptions = { multi: true };
    dbase.collection("lesson6").updateMany(myquery, newvalues, myoptions, function(err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " record(s) updated");
        db.close();
    });
});
