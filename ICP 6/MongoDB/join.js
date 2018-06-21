var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://kamaltejveerapaneni:Kamaltej78@ds117929.mlab.com:17929/demo";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("demo");
    dbo.collection('lesson6').aggregate([
        { $lookup:
                {
                    from: 'products',
                    localField: 'product_id',
                    foreignField: '_id',
                    as: 'orderdetails'
                }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});
