import Best from '../models/Bests.js';

import data from './best-everything.json' assert {type: 'json'};

//This deletes any existing authors from the database:
Best.deleteMany({}
    .then(() => {
    //This takes the data in data.json and creates another for each object in that array:
    Best.create(data).then(bests => {
        //Print the authors to the console, so we can see if it worked:
        console.log(bests);
        //End this running process:
        process.exit();
    });
}))