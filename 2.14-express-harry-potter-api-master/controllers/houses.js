import House from "../models/House.js";

export const getHouses = async (req, res) => {
  try {
    const houses = await House.find();
    res.json(houses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const house = await House.findById(id).populate("members");

    if (house) {
      return res.json(house);
    }

    res.status(400).json({ message: "House not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createHouse = async (req, res) => {
  try {
    const house = new House(req.body);
    await house.save();
    res.status(201).json(house);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateHouse = async (req, res) => {
  const { id } = req.params;
  const house = await House.findByIdAndUpdate(id, req.body);
  res.status(200).json(house);
};

export const deleteHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await House.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("House deleted!");
    }

    throw new Error("House not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
