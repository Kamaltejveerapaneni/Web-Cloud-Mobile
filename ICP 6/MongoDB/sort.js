var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://kamaltejveerapaneni:Kamaltej78@ds117929.mlab.com:17929/demo";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("demo");
    //Sort the result by name:
    var sort = { name: 1 };
    dbo.collection("lesson6").find().sort(sort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});