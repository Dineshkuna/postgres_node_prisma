import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post("/post",async (req, res) => {
  const { title, content } = req.body;

  try {
    const post = await prisma.post.create({
      data: {
        title,  
        content,
        },
    }) 

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000,() => {
    console.log("Server is running on port 3000");
}) 

