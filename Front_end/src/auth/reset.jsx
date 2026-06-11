function Reset() {

  return (<>
      
      <form action="" className="w-143 h-auto border rounded-lg p-10 m-5">

            <h1 className="text-[40px] font-semibold">Set new password</h1>
        
            <p className="text-gray-500 text-[20px] font-semibold">Must be atleast 8 charaters long</p>
            <br />

            <input type="text" placeholder="Enter new password" className="border rounded-[5px] w-full h-13 placeholder:text-gray-500 p-5"/>
            <br />
            <br />

            <input type="text" placeholder="Confirm new password" className="border rounded-[5px] w-full h-13 placeholder:text-gray-500 p-5"/>
            <br />
            <br />
            
            <div>
                <button className="flex mb-3.5 w-full h-13 border rounded-lg text-white bg-black justify-center place-items-center">Reset Password</button>
                <p>Back to <a href="/" className="text-blue-400 underline">Login</a></p>
            </div>

      </form>

    </>);

}

export default Reset;