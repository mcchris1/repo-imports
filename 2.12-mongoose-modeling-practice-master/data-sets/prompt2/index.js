import Penpal from '../models/Penpals.js';

import data from './penpals.json' assert {type: 'json'};

//This deletes any existing authors from the database:
Penpal.deleteMany({}
    .then(() => {
    //This takes the data in data.json and creates another for each object in that array:
    Penpal.create(data).then(penpals => {
        //Print the authors to the console, so we can see if it worked:
        console.log(penpals);
        //End this running process:
        process.exit();
    });
}))