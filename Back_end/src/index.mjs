import express from "express";
import cors from "cors";

import MailChecker from "mailchecker"; // To validate emails

import { validationResult, checkSchema, matchedData } from "express-validator"; // To validate data from users requests
import { passwordReserValidationSchema, userRegisterValidationSchema } from "./utils/validateSchema.mjs";

// Cookie
import cookieParser from "cookie-parser";

// DataBase
import practiceDb from "./config/practiceDb.mjs";

const app = express();
const PORT = 3000;

app.use(express.json()); // To convert every Requests and Responses to a JSON Object

app.use(cookieParser("ioh-2dla=2;oj[0da")); // To convert the cookie to a JSON Object
// The value provided in here is a secret code to encrypt the cookie

// Need to add cors to connect with frontend
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.listen(PORT, ()=>{
    console.log(`Server running on PORT:${PORT}...`)
});

// PostGre SQL Connection router
app.use(practiceDb);

const users = [
                {
                "id": 1,
                "user_name": "user",
                "role": "user",
                "company": "company",
                "email": "user@gmail.com",
                "password": "user123"
                },
                {
                "id": 2,
                "user_name": "admin",
                "role": "admin",
                "company": "company",
                "email": "admin@gmail.com",
                "password": "admin123"
                },
                {
                "id": 3,
                "user_name": "SK",
                "role": "manager",
                "company": "company",
                "email": "sk@gmail.com",
                "password": "12345"
                }
];

app.get("/", (req, res) => {
    res.send({msg: "ROOT"});
});

app.get("/dashboard", (req, res) => {

    // console.log(req.headers.cookie); // If not using cookie-parser
    // console.log(req.cookies);

    // For a signed cookie:
    console.log(req.signedCookies);

    if(req.signedCookies.role && req.signedCookies.role == "admin"){
        return res.send({msg: "You are an admin!"});
    }

    else{
        return res.status(400).send({msg: "You cannot access this"});
    }

});

// Login System API ENDPOINTS
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

    if(user.role == "admin" || user.role == "manager"){
        res.cookie("role", "admin", {maxAge: 60000 * 10, signed: true}); // Add option signed: true to make a cookie signed
    }
    else res.cookie("role", "user", {maxAge: 60000 * 10, signed: true});

    return res.send({msg: `${name} is Logged in!!`}); 
});

// auth - register
app.post("/api/register", checkSchema(userRegisterValidationSchema), (req, res) => {

    const result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send({error: result.array()})
    }

    const body = matchedData(req);
    console.log(body);
    
    const existingUser = users.find((user)=> user.user_name == body.user_name);
    if(existingUser){
        return res.status(400).send({msg: "User Already exits!"});
    }

    const newUser = {id: users[users.length-1].id+1, ...body};
    users.push(newUser);
    
    return res.send({msg: "User Registered", data: newUser});
});

function generateOTP(){
    const rand = Math.floor((Math.random() * 9000)+1000); // max[9999] - min[1000]: 9000; min: 1000 
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
app.post("/api/reset", checkSchema(passwordReserValidationSchema), (req, res) => {

    const result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send({error: result.array()})
    }

    const body = matchedData(req);
    if(body.new_password !== body.re_enter_password){
        return res.status(400).send({msg: "Password does not Match"});
    }

    return res.status(200).send({msg: "Password Changed successfully", body});
});
// Login System API ENDPOINTS