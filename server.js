const fs = require("fs");
const path = require("path");
const http = require("http");

const { getUsers, getUser, createUser } = require("./controllers/userController");

const server = http.createServer((req, res) => {

    if(req.url === "/data/users" && req.method === "GET") {
        getUsers(req, res)
    }

    else if(req.url.match(/\/data\/users\/([0-9]+)/) && req.method === "GET") {
        const id = req.url.split("/")[3];
        getUser(req, res, id);
    }

    else if(req.url === "/data/users" && req.method === "POST") {
        createUser(req, res);
    }

    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ 
            message: {
                status: "404",
                info: "Route not found",
                redirect: "Visit /data/users to reach api."
            } 
        }));
    }
});


const PORT = 5000 || process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

