function Registration() {
    return (
        <>
        <form action="">
            <p>Please enter your credentials to access your account.</p>
        
    <div className="container items-center border-amber-500 p-4 rounded-md bg-gray-100 w-2xl "  >

      <label>Enter your name:
        <input type="text" className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>
<br />
      <label>Company Name:
        <input type="text" className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>
<br />
      <label>Email:
        <input type="email" className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>
<br />  
      <label>Password:
        <input type="password" className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>
<br />
      <input type="checkbox" id="remember" className="mr-2 leading-tight" />
      <label htmlFor="remember" className="text-sm text-gray-600">I agree to </label>
      <a href="/terms" className="text-sm text-blue-500 hover:underline">Terms and Conditions</a>
<br />
      
        <input type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" value="Register" />


      
      </div>

  






        </form>
        </>
    );

}

export default Registration;