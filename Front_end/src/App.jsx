import Login from "./auth/login";
import Registration from "./auth/reg";
import forgot from "./auth/forgot";

function App() {
  return (
    <>
      <Registration />
      <Login />
      <forgot /> 
    </>
  );
}

export default App;