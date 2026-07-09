import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Features from "../pages/Features";
import Pricing from "../pages/Pricing";
import GuestRoute from "./GuestRoute";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/features" element={<Features />} />

                <Route path="/pricing" element={<Pricing />} />

                <Route path="/login" element={ <GuestRoute><Login /></GuestRoute>} />

                <Route path="/register" element={ <GuestRoute><Register /></GuestRoute> } />

                <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute> } />

                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;