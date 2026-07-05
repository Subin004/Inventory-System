import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Registration() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleNameChange(event){
    setName(event.target.value);
  }
  function handleCompanyChange(event){
    setCompany(event.target.value);
  }
  function handleEmailChange(event){
    setEmail(event.target.value);
  }
  function handlePasswordChange(event){
    setPassword(event.target.value);
  }

  function handleRegister(){

    if(name && company && email && password){

      const payload = {user_name: name, company_name: company, email: email, password: password};
      
      axios.post("http://localhost:3000/api/register/", payload)
      .then((response)=>{
        console.log(response);
        if(!response.ok){
          throw Error("Registration Failed");
        }
        return response.data; // Axios dont need the response to be converted to JSON explicitily.
      })
      .then((data)=>{
        console.log(data.msg);
        console.log(data.data);
        navigate('/login');
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    else{
      console.log("Please full the fields!")
    }
  }

  return (
    <>
    <form>
      <p>Please enter your credentials to access your account.</p>
      
      <div className="container items-center border-amber-500 p-4 rounded-md bg-gray-100 w-2xl "  >

      <label>Enter your name:
        <input type="text" value={name} onChange={handleNameChange} className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>
      <br />

      <label>Company Name:
        <input type="text" value={company} onChange={handleCompanyChange} className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>
      <br />
      
      <label>Email:
        <input type="email" value={email} onChange={handleEmailChange} className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>
      <br />  
      
      <label>Password:
        <input type="password" value={password} onChange={handlePasswordChange} className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>
      <br />
    
      <input type="checkbox" id="remember" className="mr-2 leading-tight" />
      <label htmlFor="remember" className="text-sm text-gray-600">I agree to </label>
      <a href="/terms" className="text-sm text-blue-500 hover:underline">Terms and Conditions</a>
      <br />
    
      <input type="button" onClick={handleRegister} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" value="Register" />

    </div>

  </form>
  </>
  );

}

export default Registration;