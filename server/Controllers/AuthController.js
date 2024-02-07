import User from "../Models/User.js";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();



export const register = {
    validator: async (req, res, next) => {
        const { firstName, lastName, email, password, province, city, areaCode } = req.body;
        const canadianProvinces = [
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Nova Scotia',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan',
            'Northwest Territories',
            'Nunavut',
            'Yukon'
        ];
        //Required field validation
        if (!email || !password || !firstName || !lastName || !province || !city || !areaCode) {
            return res.json({ message: "Please provide all required fields" });
        }

        if (!isNaN(firstName)) {
            return res.json({ message: "Enter valid first name" })
        }
        if (!isNaN(lastName)) {
            return res.json({ message: "Enter valid last name" })
        }
        if (!canadianProvinces.includes(province)) {
            return res.json({ message: "Enter valid province" })
        }
        if (!isNaN(city)) {
            return res.json({ message: "Enter valid city" })
        }
        if (!isValidEmail(email)) {
            return res.json({ message: "Invalid email format" })
        }

        if (!isValidPassword(password)) {
            return res.json({ message: "Password should be at least 8 characters long and contain a combination of letters, numbers, and special characters" })
        }
        next();
    },
    controller: async (req, res) => {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const { firstName, lastName, email, password, province, city, areaCode } = req.body;
            const newUser = await User.create({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                province,
                city,
                areaCode
            })
            return res.json({ message: "User registered successfully", user: newUser });
        }
        catch (e) {
            console.log(e);
            if (e.keyValue?.email) {
                return res.status(409).send("Email Address Already Exists");
            }
            else {
                return res.status(500).send("Registration Failed");
            }
        }
    }
}

export const login = {
    validator: async (req, res, next) => {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({ error: "Email and password are required." });
        }
        next();
    },
    controller: async (req, res) => {
        try {
            const { email, password } = req.body;
            // Find user by email
            const foundUser = await User.findOne({ email });
            if (!foundUser) {
                return res.json({ error: "User not found." });
            }
            // Compare hashed password with provided password
            const passwordMatch = await bcrypt.compare(password, foundUser.password);

            if (passwordMatch) {
                return res.json({ message: "Login successful." });
            } else {
                return res.json({ error: "Incorrect password." });
            }

        }
        catch (e) {
            return res.status(500).send("Login Failed Internal Server Error");
        }
    }
}

// Helper functions for server-side validation
const isValidEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  }
  
  const isValidPassword = (password) => {
    return (password.length >= 8 && password.match(/[a-zA-Z]/) && password.match(/\d/) && password.match(/[!@#$%^&*()_+\\|,.<>/?]/))
  }