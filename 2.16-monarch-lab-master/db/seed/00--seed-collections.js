import mongoose from "../connection.js";
import kingdomData from "../data/kingdomRaw.json" assert { type: "json" };
import monarchData from "../data/monarchRaw.json" assert { type: "json" };
import Kingdom from "../../models/Kingdom.js";
import Monarch from "../../models/Monarch.js";

// Scrub the data
// const scrubbedKingdomData = kingdomData.map(({ title, extract }) => {
//   return {
//     title,
//     extract,
//   };
// });

// console.log(scrubbedKingdomData);

const insertData = async () => {
  await Kingdom.deleteMany({});
  await Monarch.deleteMany({});
  await Kingdom.create(kingdomData);
  await Monarch.create(monarchData);
  console.log("Kingdoms and Monarch Inserted");
  mongoose.disconnect();
};

insertData();