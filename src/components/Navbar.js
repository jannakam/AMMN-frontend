// will remove later

import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';
import ThemeSwitcher from './ThemeSwitcher';


export default function Navbar() {
    const items = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Features', icon: 'pi pi-star' },
        { label: 'Projects',icon: 'pi pi-briefcase',},
        { label: 'Contact', icon: 'pi pi-envelope' }
    ];

    const start = (
        <img
            alt="logo"
            src="https://primefaces.org/cdn/primereact/images/logo.png"
            width="40"
            className="mr-2"
        />
    );

    const end = (
        <div className="flex align-items-center gap-3">
            <InputText placeholder="Search" type="text" className="p-1" />
            <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                shape="circle"
                className="p-overlay-badge"
            />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    );
}
