import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

/*Register User */

export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            picture,
            picturePath,
            friends,
            location,
            occupation,
            viewdProfile: Math.floor(Math.random() * 1000) + 1,
            impressions: Math.floor(Math.random() * 10000) + 1
        })
        const user = await newUser.save();
        res.status(201).json(user);
    }

    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json("User not found");
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json("Wrong password");
        }
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "500d" });
        delete user.password;
        res.status(200).json({ token, user });
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}