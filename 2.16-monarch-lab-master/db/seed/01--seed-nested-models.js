import mongoose from "../connection.js";
import Kingdom from "../../models/Kingdom.js";
import Monarch from "../../models/Monarch.js";

// Kingdom.find({}).then((kingdoms) => {
//   kingdoms.forEach((kingdom) => {
//     Monarch.updateMany(
//       { kingdom: kingdom.title },
//       { $set: { kingdom: kingdom } }
//     ).then(() => mongoose.disconnect());
//   });
// });

const updateData = async () => {
  let kingdoms = await Kingdom.find({});

  kingdoms.forEach(async (kingdom) => {
    await Monarch.updateMany(
      { kingdom: kingdom.title },
      { $set: { kingdom: kingdom } }
    );
  });

  mongoose.disconnect();
};

updateData();