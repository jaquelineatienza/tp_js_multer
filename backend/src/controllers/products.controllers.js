import { productos } from "../db/database.js";

//create product
export const createProduct = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    let image = "";
    let id = 0;

    if (req.file) {
      image = "/uploads/" + req.file.filename;
    } else {
      return res.status(401).json({ msg: "Image is required" });
    }
    const newProduct = {
      id: id++,
      name: name,
      price: price,
      description: description,
      image: image,
    };
    const result = productos.push(newProduct);
    if (result) {
      res.status(201).json({ msg: "product create", result });
    } else {
      res.status(302).json({ msg: "error" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "interval server error ", error });
  }
};

export const getAllProduct = async (req, res) => {
  res.json(productos);
};
