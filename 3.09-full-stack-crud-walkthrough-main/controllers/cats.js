import Cat from "../models/Cat.js";

export const getCats = async (req, res) => {
  try {
    const cats = await Cat.find();
    res.json(cats);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getCat = async (req, res) => {
  try {
    const { id } = req.params;

    const cat = await Cat.findById(id);
    res.json(cat);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createCat = async (req, res) => {
  try {
    const cat = new Cat(req.body);
    await cat.save();
    res.status(201).json(cat);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateCat = async (req, res) => {
  const { id } = req.params;
  const cat = await Cat.findByIdAndUpdate(id, req.body);
  res.status(200).json(cat);
};

export const deleteCat = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Cat.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Cat Deleted!");
    }

    throw new Error("Cat not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
