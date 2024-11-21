"use client";

import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTheme } from "./ThemeContext";

const Carousel = () => {
    const { logo } = useTheme();

    const items = [
        {
            title: "بوك من غير بنوك",
            subtitle: "Pay Now, Transfer Later!",
            description:
                "A wallet for the modern age. Spend money, manage accounts, and skip the bank—because you deserve financial freedom on your terms.",
            button: "Explore the Wallet",
        },
        {
            title: "قطية",
            subtitle: "Budget as a Team!",
            description:
                "Planning a trip or buying a gift for a mutual friend? Create a joint expenses account and simplify managing group finances.",
            button: "Start Budgeting",
        },
        {
            title: "سلفني",
            subtitle: "Friendship Meets Accountability!",
            description:
                "Planning a trip or buying a gift for a mutual friend? Create a joint expenses account and simplify managing group finances.",
            button: "Start Budgeting",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % items.length); // Loops back to the first slide
        }, 7000); // Adjusted interval for more subtle transition
        return () => clearInterval(interval);
    }, [items.length]);

    const itemTemplate = (item) => (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="text-center p-6 rounded w-3/4">
                <div className="text-primary font-bold mb-4 text-5xl noto-kufi-arabic">{item.title}</div>
                <div className="mb-4 font-bold text-2xl">{item.subtitle}</div>
                <div className="text-2xl mb-5">{item.description}</div>
                <Button label={item.button} className="p-button-lg p-button-primary p-2 w-3 bg-primary" />
            </div>
        </div>
    );

    const indicatorTemplate = (index) => (
        <button
            onClick={() => setActiveIndex(index)}
            className={`p-2 m-1 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-primary text-white scale-110" : "bg-gray-300"
            }`}
        />
    );

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Logo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <Image src={logo} alt="Your Logo" width={300} height={50} />
            </div>

            {/* Carousel */}
            <div
                className="relative h-full flex flex-col transition-transform duration-1000 ease-linear"
                style={{
                    transform: `translateY(-${activeIndex * 100}%)`,
                }}
            >
                {items.map((item, index) => (
                    <div key={index} className="h-screen flex flex-col justify-center items-center">
                        {itemTemplate(item)}
                    </div>
                ))}
            </div>

            {/* Custom Indicators */}
            <div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col items-center">
                {items.map((_, index) => (
                    <div key={index}>{indicatorTemplate(index)}</div>
                ))}
            </div>
        </div>
    );
};

export default dynamic(() => Promise.resolve(Carousel), { ssr: false });
