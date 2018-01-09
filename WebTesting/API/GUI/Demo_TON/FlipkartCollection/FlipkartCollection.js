var path = require('path'), // ensures that the path is consistent, regardless of where the script is run from

    async = require('async'), // https://npmjs.org/pacakge/async
    int   = require('int'),
    newman = require('newman'), // change to require('newman'), if using outside this repository

    
    options = {
        collection: path.join(__dirname, 'FlipkartCollection.json')
    },

   
    parallelCollectionRun = function (done) {
      
       newman.run({
    collection: path.join(__dirname, 'FlipkartCollection.json'),
    reporters: 'html'
        }, function (err) {
    if (err) { throw err; }
    //console.log('collection run complete!');
        });
    };
var value = 5;
var items = [];
for (i=0;i<value;i++){
    items.push(i)
    //console.log(i)
}
async.forEach(items,function(){
   async.parallel([
    parallelCollectionRun
    ],

    function (err, results) {
        err && console.error(err);

        results.forEach(function (result) {
            var failures = result.run.failures;
            console.info(failures.length ? JSON.stringify(failures.failures, null, 2) :
                         `${result.collection.name} ran successfully.`);
        });
    });
  });





