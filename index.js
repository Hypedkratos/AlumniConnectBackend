import express from 'express'
import cors from "cors"
import { connectToDatabase } from './db/connect.js'
import User from './db/models/user.model.js'
import bodyParser from "body-parser";
import Users from './db/models/user.model.js';

const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(bodyParser.json())

//
app.post('/signup', async (req, res) => {
    try {
        await connectToDatabase()
        const body =req.body
        console.log(body);
      //Create a new user based on request body
      const newUser = new Users(req.body);
      //Save the user to the database
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // Define GET API endpoint to get all users
app.get('/api/users', async (req, res) => {
  try {
    // Query the database to fetch all users
    const users = await Users.find();
    res.json(users); // Send retrieved users as JSON response
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World! This is my first express code!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})