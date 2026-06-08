function Login() {
    return (
        <>
        <form action="">
            
            <h1 className="text-shadow-black text-6xl" >Welcome Back</h1>
            <p className="text-gray-600">Please enter your credentials to access your account.</p>
        
    <div className="container items-center border-amber-500 p-4 rounded-md bg-gray-100 w-2xl "  >

      <label>Enter your name:
        <input type="text" className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>
<br />
      <label>Password:
        <input type="password" className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>
<br />
       <input type="checkbox" id="remember me" className="mr-2 leading-tight" />
       <label htmlFor="remember me" className="text-sm text-gray-600">Remember me</label>
       <a href="forgot" className="text-sm text-blue-500 hover:underline ml-4">Forgot password?</a>
<br />  
        <input type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" value="Login" />
        <input type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 ml-4" value="Sign up" />
      </div>
        </form>
        </>
    );

}

export default Login;