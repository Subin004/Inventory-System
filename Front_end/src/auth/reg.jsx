function Registration() {
    return (
        <>
        <style>
          {`
          p{
            font-size: 1rem;
            color: red;
                                    }
          form{
            display: flex;
            flex-direction: bottom;
            justify-content: center;
            align-items:center;
            }
          #button{
          border:2px solid;
          border-radius:4px;
          color:white;
          background-color:black;
          padding:4px;
          }
          inputField{
          border:2px solid grey;
          border-radius:4px;
          }
        
        `}
          
        </style>
        <form action="">
            <p>Please enter your credentials to access your account.</p>

        
    <div >

      <label>Enter your name:<br></br>
        <input type="text" className="inputField" />
      </label>
<br />
      <label>Company Name:<br></br>
        <input type="text"  />
      </label>
<br />
      <label>Email:<br></br>
        <input type="email"  />
      </label>
<br />  
      <label>Password:<br></br>
        <input type="password"  />
      </label>
<br />
      <input type="checkbox"  />
      <label htmlFor="remember" >I agree to </label>
      <a href="/terms" >Terms and Conditions</a>
<br />
      
        <input type="button" id="button" value="submit"/>


      
      </div>

  






        </form>
        </>
    );

}

export default Registration;