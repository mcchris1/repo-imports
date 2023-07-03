import Bev from '../models/Bevs.js';

import data from './beverage-data.json' assert {type: 'json'};

//This deletes any existing authors from the database:
Bev.deleteMany({}
    .then(() => {
    //This takes the data in data.json and creates another for each object in that array:
    Bev.create(data).then(bevs => {
        //Print the authors to the console, so we can see if it worked:
        console.log(bevs);
        //End this running process:
        process.exit();
    });
}))
