import { Dock } from 'primereact/dock';

export const DockDemo = () => {

    const items = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Features', icon: 'pi pi-star' },
        { label: 'Projects',icon: 'pi pi-briefcase',},
        { label: 'Contact', icon: 'pi pi-envelope' }
    ];

    return (
        <Dock model={items} />
    );
}
 