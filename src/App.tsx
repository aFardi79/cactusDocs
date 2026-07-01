import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import LoginPage from "./pages/LoginPage";
import BasePage from "./pages/BasePage";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/base-page' element={<BasePage />} />
            </Routes>
        </div>
    );
}

export default App;
