import React from "react";
import "./style.css";
import NavBar from './components/NavBar';
import Shop from './components/Shop';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
import firebase from './Firebase';

export default function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
      
    </div>
  );
}
