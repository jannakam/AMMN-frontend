"use client";
import React, { useState } from 'react';
import { Dock } from 'primereact/dock';
import 'primeicons/primeicons.css';

export default function DockNav() {
    const [dockItems, setDockItems] = useState([
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Salifny', icon: 'pi pi-send' },
        { label: 'Gatiya', icon: 'pi pi-users' },
        { label: 'Wallet', icon: 'pi pi-wallet' },
      ]);

    return (
        <Dock model={dockItems} position="left" className='px-5 rounded-full cursor-pointer'/>
    );
}