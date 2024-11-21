// this is where we call the home page components, 
// we are using this instead of directly putting them 
// in page.js because we need use states. 
// The page.js is best kept as a server component for async functionality

"use client";

import { useState, React } from "react";
import Navbar from "./Navbar";
import CTA from "./Carousel";
import Login from "./Login";
import Footer from "./Footer";
import Carousel from "./Carousel";
import ThemeSwitcher from "./ThemeSwitcher";

export default function MainContent() {
    const [marginRight, setMarginRight] = useState("mr-[40px]");

    const handleVisibilityChange = (isVisible) => {
        setMarginRight(isVisible ? "mr-[350px]" : "mr-[40px]");
    };

    return (
        <div className={`transition-all duration-300 w-full ${marginRight}`}>
            <ThemeSwitcher />
            <Login onVisibilityChange={handleVisibilityChange} />
            <Carousel />
            <Footer/>
        </div>
    );
}
