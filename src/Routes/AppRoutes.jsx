import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../Layout/Body";
import Inicio from "../Pages/Inicio";

export default function AppRoutes() {
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');

        function handleScroll() {
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                if (rect.top < viewportHeight && rect.bottom > 0) {
                    element.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fade-in">
            <BrowserRouter>
                <Routes>
                    <Route path="/weather-app" element={<Body />}>
                        <Route path="/weather-app" element={<Inicio />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}