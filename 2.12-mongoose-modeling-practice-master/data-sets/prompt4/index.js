import Superhero from '../models/Superheroes.js';

import data from './superheroes.json' assert {type: 'json'};

//This deletes any existing authors from the database:
Superhero.deleteMany({}
    .then(() => {
    //This takes the data in data.json and creates another for each object in that array:
    Superhero.create(data).then(superheroes => {
        //Print the authors to the console, so we can see if it worked:
        console.log(superheroes);
        console.log("dicks");
        //End this running process:
        process.exit();
    });
}))
