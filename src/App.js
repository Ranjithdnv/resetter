
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";

import {Route, Routes} from "react-router-dom"

function App() {
 

  return (

    
      <>
      <Routes>
        <Route
          path="/home"
          element={<Home/>}
        />
         <Route
          path="/home/login"
          element={<Login/>}
        />
       
      </Routes>
    
    
    </>

  );
}

export default App;