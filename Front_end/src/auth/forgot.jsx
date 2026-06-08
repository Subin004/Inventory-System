function forgot() {
  
    return (
        <>
        <form action="">
            
            <h1 className="text-black text-6xl" >Forgot Password</h1>
            <p className="text-gray-600" > No worries, we'll help you reset it.</p>
        
    <div className="container items-center border-amber-500 p-4 rounded-md bg-gray-100 w-2xl "  >

      <label>Enter your Email:
        <input type="email" className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>
<br />
      
        <input type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" value="Reset Password" />

      </div>
        </form>
        </>
    );

}

export default forgot;