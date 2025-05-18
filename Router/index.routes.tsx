
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "../Pages/index";
import React from "react";


const BrowserRouter =createBrowserRouter(
createRoutesFromElements([
    <Route path="/" element={<Home/>}/>,
    <Route path="/404" element={<div>#404</div>}/>,
    <Route path="*" element={<Navigate to="/404" replace />}/>

]));

const router = () => {
0
    return <RouterProvider router={BrowserRouter}></RouterProvider>

}

export{
    router
}