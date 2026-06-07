function forgot() {


    return (
        <>
        <form action="">
            
            <h1 className="text-amber-300 text-6xl" >Hello, World!</h1>

            <h2>Welcome Back!!</h2>
            <p>Please enter your credentials to access your account.</p>
        
    <div className="container items-center border-amber-500 p-4 rounded-md bg-gray-100 w-2xl "  >

      <label>Enter your name:
        <input type="text" className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>
<br />
      <label>Password:
        <input type="password" className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>
<br />
      
        <input type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" value="Login" />


      
      </div>

  






        </form>
        </>
    );

}

export default forgot;