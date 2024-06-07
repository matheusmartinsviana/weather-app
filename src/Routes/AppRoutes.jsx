import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../Layout/Body";
import Inicio from "../Pages/Inicio";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body />}>
                    <Route path="/" element={<Inicio />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}