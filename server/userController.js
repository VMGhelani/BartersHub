import { connectToDb } from './db.js';

export async function registerUser(req, res) {
  try {
    const db = await connectToDb();
    const { firstName, lastName, dOB, gender, email, password } = req.body;
    if (!email || !password || !firstName || !lastName || !dOB || !gender) {
      return res.json({ message: "Please provide all required fields" });
    }

    const existingUser = await db.collection('users').findOne({ email: email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    else{
      const result = await db.collection('users').insertOne({ firstName, lastName, dOB, gender, email, password });
      return res.json({ message: "User registered successfully", user: result });
    }    
  } 
  catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
