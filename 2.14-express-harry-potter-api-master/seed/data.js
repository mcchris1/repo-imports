import db from "../db/connection.js";
import House from "../models/House.js";
import Character from "../models/Character.js";
import houses from "./houses.json" assert { type: "json" };
import characters from "./characters.json" assert { type: "json" };

const insertData = async () => {
  // Reset Database
  await db.dropDatabase();
  // Insert Characters into the Database
  await Character.insertMany(characters);
  // Insert Houses into the Database
  await House.insertMany(houses);
  // Close DB connection
  db.close();
};

insertData();
