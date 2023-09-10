const User = require("../models/userModel");

// Gets all users data
async function getUsers (req, res) {
    try {
        const users = await User.findAll();

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    }
    catch(err) {
        console.log(err);
    }
}

// Gets specific user data by id
async function getUser(req, res, id) {
    try {
        const user = await User.findById(id);

        if(!user) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "User not found" }));
        }
        else {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(user));
        }
    }
    catch (err) {
        console.log(err);
    }
}

// Creates a new user
async function createUser(req, res) {
    try {
        const user = {
            firstName: "Jake",
            lastName: "Owens",
            age: 25,
            job: "Student",
            location: "Nigeria"
        }

        const newUser =  await User.create(user);

        res.writeHead(201, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(newUser));
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = { 
    getUsers,
    getUser,
    createUser
}