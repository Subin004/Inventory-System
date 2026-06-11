function Otp() {

    return (
      <>
        
          <form action="" className="w-143 h-auto border rounded-lg p-5 m-5">

                <h1 className="text-3xl">Password Reset</h1>
            
                <p className="text-gray-500">We sent a code to <span className="text-black">abc@gmail.com</span></p>
                <br />

                <div>
                    <input type="text" className="border rounded-[10px] w-10 h-13 mr-3"/>
                    <input type="text" className="border rounded-[10px] w-10 h-13 mr-3"/>
                    <input type="text" className="border rounded-[10px] w-10 h-13 mr-3"/>
                    <input type="text" className="border rounded-[10px] w-10 h-13 mr-3"/>
                </div>
                <br />
                
                <div>
                    <button className="flex mb-3.5 w-full border rounded-lg text-white bg-black h-13 justify-center place-items-center">Continue</button>
                    <p>Don't reveice an email? <a href="/" className="text-blue-400 underline">Click here</a></p>
                    <p>Back to <a href="/" className="text-blue-400 underline">Login</a></p>
                </div>

          </form>
      </>
    );

}

export default Otp;