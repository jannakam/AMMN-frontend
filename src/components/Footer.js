"use client";
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import Image from "next/image";
import dynamic from "next/dynamic";

const Footer = () => {

  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-around items-center h-full bg-primary w-full">
        <div className="mb-4 md:mb-0">
          <Image src="assets/ammn_logo_black.svg" alt="Your Logo" width={200} height={50} />
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} AMMN. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Button
            icon="pi pi-github"
            className="p-button-rounded p-button-text"
            aria-label="GitHub"
            onClick={() =>
              window.open("https://github.com/your-profile", "_blank")
            }
          />
          <Button
            icon="pi pi-twitter"
            className="p-button-rounded p-button-text"
            aria-label="Twitter"
            onClick={() =>
              window.open("https://twitter.com/your-profile", "_blank")
            }
          />
          <Button
            icon="pi pi-linkedin"
            className="p-button-rounded p-button-text"
            aria-label="LinkedIn"
            onClick={() =>
              window.open("https://linkedin.com/in/your-profile", "_blank")
            }
          />
        </div>
      </div>
    </footer>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
