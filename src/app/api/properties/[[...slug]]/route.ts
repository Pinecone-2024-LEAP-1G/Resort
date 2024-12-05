import type { NextApiRequest, NextApiResponse } from "next";

// Simulated database of products
const products = [
  { id: "1", name: "Product One", price: 100 },
  { id: "2", name: "Product Two", price: 200 },
  { id: "3", name: "Product Three", price: 300 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query; // Access the dynamic parameter from the URL

  if (req.method === "GET") {
    // Find the product with the matching ID
    const product = products.find((item) => item.id === id);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } else if (req.method === "POST") {
    // Handle POST request to create or update a product
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: "Name and price are required" });
    }

    // Update the product if it exists, or create a new one
    let product = products.find((item) => item.id === id);

    if (product) {
      product = { ...product, name, price }; // Update product
      return res.status(200).json(product);
    } else {
      const newProduct = { id: id as string, name, price };
      products.push(newProduct); // Add new product to "database"
      return res.status(201).json(newProduct);
    }
  } else {
    // If method is not GET or POST, respond with a 405 Method Not Allowed
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
