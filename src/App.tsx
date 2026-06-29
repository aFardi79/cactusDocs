import React from 'react';
import logo from './logo.svg';
import './App.css';
import GeneralInput from "./general-component/GeneralInput";
import LoginPage from "./pages/LoginPage";
function App() {

    const onClinet = (value : any) => {
        console.log(value)
    }
  return (
    <div className="App">
        <LoginPage/>
    </div>
  );
}

export default App;
