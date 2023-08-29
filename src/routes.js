import React from 'react';
import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage"

const routes = () => {
    return (
        <Routes>
             <Route index element={<HomePage />} />
        </Routes>
    );
};

export default routes;