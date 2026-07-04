import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;
app.use(express.json());

// Need to add cors to connect with frontend
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

const users = [
    {id: 1, user_name: "SKSARO", password: "12345"},
    {id: 2, user_name: "user", password: "user123"},
    {id: 3, user_name: "AK", password: "12345"},
    {id: 4, user_name: "admin", password: "admin123"},
];

app.listen(PORT, ()=>{
    console.log(`Server running on PORT:${PORT}...`)
});

app.get("/", (req, res) => {
    res.send({msg: "ROOT"});
});

app.get("/api/login/:name&:password", (req, res) => {

    const name = req.params.name;
    const password = req.params.password;

    const user = users.find((user)=> user.user_name == name);

    if(!user){
        return res.status(400).json({message: "Invalid Name!"});
    }
    if(user.password !== password){
        return res.status(404).json({message: "Invalid Password!"});
    }

    return res.send({msg: `${name} is Logged in!!`});
     
});

app.post("/api/register", (req, res) => {

    res.send(req.body);
    console.log(req.body);
});