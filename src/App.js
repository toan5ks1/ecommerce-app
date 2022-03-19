import SignIn from "./components/Account/Sign-in/SignIn";
import Home from "./components/Home/Home"
import { render } from "react-dom";
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
      {/* <React.Fragment> */}
      <Routes>
        <Route path="/signin" element={<SignIn />}>
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
      {/* </React.Fragment> */}
    </BrowserRouter>


  );


}

export default App;
