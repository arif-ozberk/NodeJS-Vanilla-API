const users = require("../data/users.json");
const uuid = require("uuid");
const { writeDataToFile } = require("../utils");

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(users);
    });
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const user = users.find((p) => p.id === id);
        resolve(user);
    });
}

function create(user) {
    return new Promise((resolve, reject) => {
        const newUser = { id: uuid.v4(), ...user }
        users.push(newUser);

        writeDataToFile("./data/users.json", users);
        resolve(newUser);
    });
}

module.exports = { 
    findAll,
    findById,
    create
};