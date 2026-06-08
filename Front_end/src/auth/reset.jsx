function Reset() {

    return (
      <>
        <div className="flex items-center border">
          <form action="" className="py-8 px-8">
            <h1>Reset Password</h1>
            <p>Please enter your new password below.</p>
            <label>New Password:
              <input type="password" className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
            <br />
            <label>Confirm Password:
              <input type="password" className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
            <br />
            <input type="button" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" value="Reset Password" />
          </form>
        </div>
      </>
    );

}

export default Reset;