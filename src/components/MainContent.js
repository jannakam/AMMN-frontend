// this is where we call the home page components, 
// we are using this instead of directly putting them 
// in page.js because we need use states. 
// The page.js is best kept as a server component for async functionality

"use client";

import { useState, React } from "react";
import Navbar from "./Navbar";
import CTA from "./CTA";
import Login from "./Login";

export default function MainContent() {
    const [marginRight, setMarginRight] = useState("mr-[40px]");

    const handleVisibilityChange = (isVisible) => {
        setMarginRight(isVisible ? "mr-[350px]" : "mr-[40px]");
    };

    return (
        <div className={`transition-all duration-300 w-full ${marginRight}`}>
            <Login onVisibilityChange={handleVisibilityChange} />
            {/* <Navbar /> */}
            <CTA />
        </div>
    );
}
