import express from 'express';
import UserModel from './src/models/user.model.js';
import dotenv from 'dotenv';
import connectData from './src/database/connect.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
connectData();

app.use((req, res, next) =>{
  console.log(`Criado em: ${new Date()}`);

  next();
})

//add a user
app.post('/', async (req, res) =>{
  try{
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch(err){
    res.status(500).send(err.message);
  }
})

//list users
app.get('/', async (req, res) =>{
  try{
    const user = await UserModel.find({});
    res.status(200).json(user);
  } catch(err){
    res.status(500).send(err.message);
  }
})

//search a user
app.get('/:id', async (req, res) =>{
  try{
    const { id } = req.params;
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch(err){
    res.status(500).send(err.message);
  }
})

//change values
app.patch('/:id', async (req, res) =>{
  try{
    const { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json(user);
  } catch(err){
    res.status(500).send(err.message);
  }
})

//delete user
app.delete('/:id', async (req, res) =>{
  try{
    const { id } = req.params;
    const user = await UserModel.findByIdAndRemove(id);
    res.status(200).json(user);
  } catch(err){
    res.status(500).send(err.message);
  }
})

app.listen(5000, () => console.log('runnin 5000'));