import React from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";
import WelcomePage from "../WelcomePage";

function Router(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route element={<Login/>} path="/"/>
            <Route element={<WelcomePage/>} path="/welcome"/>


        </Routes>
        </BrowserRouter>

        </>
    )
}
export default Router;