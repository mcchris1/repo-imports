import Character from "../models/Character.js";

export const getCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getCharacter = async (req, res) => {
  try {
    const { id } = req.params;

    const character = await Character.findById(id);
    res.json(character);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createCharacter = async (req, res) => {
  try {
    const character = new Character(req.body);
    await character.save();
    res.status(201).json(character);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateCharacter = async (req, res) => {
  const { id } = req.params;
  const character = await Character.findByIdAndUpdate(id, req.body);
  res.status(200).json(character);
};

export const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Character.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Character Deleted!");
    }

    throw new Error("Character not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
