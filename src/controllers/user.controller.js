import User from "../models/User";

export const createUser =async  (req, res) => {
    const newUser = new User(req.body);
    const userSaved = await newUser.save();
    res.status(201).json(userSaved);
}

export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.userId)
    res.json(user)
}

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
}
