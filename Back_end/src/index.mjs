import express from "express";
import cors from "cors";
import MailChecker from "mailchecker";

const app = express();
const PORT = 3000;
app.use(express.json());

// Need to add cors to connect with frontend
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

const users = [
                {
                "user_name": "user",
                "company": "company",
                "email": "user@gmail.com",
                "password": "user123"
                },
                {
                "user_name": "admin",
                "company": "company",
                "email": "admin@gmail.com",
                "password": "admin123"
                },
                {
                "user_name": "SK",
                "company": "company",
                "email": "sk@gmail.com",
                "password": "12345"
                }
];

app.listen(PORT, ()=>{
    console.log(`Server running on PORT:${PORT}...`)
});

app.get("/", (req, res) => {
    res.send({msg: "ROOT"});
});

// auth - login
app.get("/api/login/:name&:password", (req, res) => {

    const name = req.params.name;
    const password = req.params.password;

    const user = users.find((user) => user.user_name == name);

    if(!user){
        return res.status(400).json({message: "Invalid Name!"});
    }
    if(user.password !== password){
        return res.status(404).json({message: "Invalid Password!"});
    }

    return res.send({msg: `${name} is Logged in!!`});
     
});

// auth - register
app.post("/api/register", (req, res) => {

    const {body} = req;
    // console.log(user_name);
    // console.log(company);
    // console.log(email);
    // console.log(password);

    if(!body.user_name || !body.company || !body.email || !body.password){
        return res.status(400).send({msg: "Please full all the details!"});
    }
    
    const existingUser = users.find((user)=> user.user_name == body.user_name);
    // console.log(newUser);
    if(existingUser){
        return res.status(400).send({msg: "User Already exits!"});
    }

    const newUser = {id: users[users.length-1].id+1, ...body};
    // console.log(newUser);
    users.push(newUser);
    
    return res.send({msg: "User Registered", data: newUser});
});

function generateOTP(){
    const rand = Math.floor((Math.random() * 9000)+1000);
    return rand;
}
let OTP;
// auth - forgot
app.get("/api/forgot", (req, res) => {

    const email = req.body.email.toLowerCase();
    if(!email){
        return res.status(400).send({msg: "Email is Empty"});
    }

    if(!MailChecker.isValid(email)){
        return res.status(400).send({msg: "Email is not valid"});
    }

    const validEmail = users.find((user)=> user.email == email);
    if(!validEmail){
        return res.status(400).send({msg: "Email Not Found"});
    }

    OTP = generateOTP();
    // console.log(OTP);

    // console.log("API log: ",email);
    return res.status(200).send({msg: "Email Found", email});
});

// auth - otp
app.get("/api/otp/:OTP", (req, res) => {

    const userOTP = parseInt(req.params.OTP);
    if(userOTP !== OTP){
        return res.status(400).send({msg: "OTP is Wrong"});
    }

    return res.status(200).send({msg: "OTP is correct", userOTP});
});

// auth - reset
app.post("/api/reset", (req, res) => {

    const {new_password, re_enter_password} = req.body;
    if(new_password !== re_enter_password){
        return res.status(400).send({msg: "Password does not Match"});
    }

    return res.send(req.body);
});