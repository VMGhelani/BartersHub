import express from 'express';
import bodyParser from 'body-parser';
import { registerUser } from './userController.js';
import {login} from './userController.js';

const app = express();
app.use(bodyParser.json());

// API End-points
app.post('/register', registerUser);
app.post('/login',login)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
