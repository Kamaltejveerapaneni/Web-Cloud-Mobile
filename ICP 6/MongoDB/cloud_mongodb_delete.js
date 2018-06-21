/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://kamaltejveerapaneni:Kamaltej78@ds117929.mlab.com:17929/demo';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("demo");
    var myquery = { address: 'Main Road 989' };
    dbase.collection("lesson6").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});