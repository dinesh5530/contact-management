import React from "react";
import "./App.css";
import Header from "./Header";
import Signin from "./Signin";
import SignUp from "./SignUp";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
 
  return (
    <div className="ui container">

      <Router>
        <Routes>
          <Route path='/' element={<Signin/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/main' element={<Header/>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
} 

export default App;
