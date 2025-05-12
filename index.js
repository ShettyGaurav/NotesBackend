import express from "express";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors"


dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors())
app.use(express.json());
app.use(cookieParser());


app.post("/create-User", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const response = await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });
    const token = jwt.sign(response, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    const resi = await prisma.tokenToId.create({
      data: {
        token: token,
        id: response.id,
      },
    });
    console.log(resi);
    console.log(response);
    res.json({ response, token });
  } catch (err) {
    console.log(err);
    res.status(500).send("Hello");
  }
});

app.post("/add-Todo", async (req, res) => {
  try {
    const { title, content, token } = req.body;
    const response = await prisma.tokenToId.findFirst({
      where: {
        token: token,
      },
    });
    const newTodo = await prisma.todo.create({
      data: {
        title,
        content,
        user: {
          connect: {
            id: response.id,
          },
        },
      },
    });
    console.log(newTodo);
    res.json({title:newTodo.title,content:newTodo.content});
  } catch (err) {
    console.log(err);
    res.send("Hii");
  }
});

app.post("/get-all-todo",async (req,res)=>{
    const {id} = req.body
    const response = await prisma.todo.findMany({
        where:{
            userId:id
        }
    })
    res.json(response)
})

app.get("/", (req, res) => {
  // const {userId,message} = req.body()
  console.log("Hey Gaurav");
  res.send();
});

app.listen(4000, () => {
  console.log("on port http://localhost:4000");
});
