"use client";
import React from "react";
import { Button } from "primereact/button";

const LogoutButton = () => {
  return (
    <div
      className="fixed bottom-10 left-4 z-50" // Fixed position at bottom-left
    >
      <Button
        icon="pi pi-sign-out"
        className="p-button-danger p-button-rounded shadow-lg"
        // onClick={onLogout} // Trigger the logout function
      />
    </div>
  );
};

export default LogoutButton;
