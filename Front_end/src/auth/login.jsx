import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rightUser, setRightUser] = useState(true);

  function handleNameChange(event){
    setName(event.target.value);
  }

  function handlePasswordChange(event){
    setPassword(event.target.value);
  }

  function handleLogin(){

    if(name && password){
      
      fetch("http://localhost:3000/api/login/"+name+"&"+password)
      .then((response)=>{
        console.log(response);
        if(!response.ok){
          setRightUser(false);
          throw Error("Error User Not Found");
        }
        return response.json();
      })
      .then((data)=>{
        console.log(data.msg);
        navigate('/owner');
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
            
          <h1 className="text-shadow-black text-6xl" >Welcome Back</h1>
          <p className="text-gray-600">Please enter your credentials to access your account.</p>
        
          <div className="container items-center border-amber-500 p-4 rounded-md bg-gray-100 w-2xl "  >

            <label>Enter your name:
              <input type="text" value={name} onChange={handleNameChange} className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
            <br />

            <label>Password:
              <input type="password" value={password} onChange={handlePasswordChange} className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
            <br />

            {!rightUser && <p className="text-red-600">Name/Password is Wrong</p>}

            <input type="checkbox" id="remember me" className="mr-2 leading-tight" />
            <label htmlFor="remember me" className="text-sm text-gray-600">Remember me</label>
            <Link to="/forgot" className="text-sm text-blue-500 hover:underline ml-4">Forgot password?</Link>
            <br />  

            <input type="button" onClick={() => {handleLogin();}} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" value="Login" />
            <input type="button" onClick={() => navigate('/register')} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 ml-4" value="Sign up" />

          </div>

        </form>

        </>
    );
}
export default Login;