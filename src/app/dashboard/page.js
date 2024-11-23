"use client"
import React, { useState } from 'react';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { ThemeProvider } from '@/components/ThemeContext';
import DockNav from '@/components/DockNav';
import { Card } from 'primereact/card';
import { ListBox } from 'primereact/listbox';

        
const Dashboard = () => {

  const [selectedFriend, setSelectedFriend] = useState(null)
  const friends = [
    { profilePic: '', name: 'Janna'},
    { profilePic: '', name: 'Nora'},
    { profilePic: '', name: 'Saja'},
    { profilePic: '', name: 'Wahab'}
  ]

  return (
    <ThemeProvider>
    <ThemeSwitcher />
    <div className="flex flex-col h-full m-10">
      <div className="w-full flex flex-row justify-end mb-10">
        <div className="search-avatar">
          <span className="p-input-icon-left">
            <InputText placeholder="Search" className='p-1 pl-3'/>
          </span>
          <Avatar icon="pi pi-user" shape="circle" />
        </div>
      </div>
      
      <div className="content flex flex-row justify-center items-center h-full gap-2">
        <div className="left-half w-full h-full">
          {/* Add your widgets for the left half here */}
          <Card title="Wallet" subTitle="Card Subtitle" className=''/>
        </div>
        
        
        <div className="right-half w-full h-full gap-2">
          {/* Add your widgets for the right half here */}
          <div className='flex flex-col justify-center items-center h-full w-full gap-2'>
          <Card title="Gatiya" subTitle="Card Subtitle" className='w-full h-full'/>
          <div className='flex flex-row w-full gap-2'>
          <ListBox value={selectedFriend} onChange={(e) => setSelectedFriend(e.value)} options={friends} optionLabel="name" className="w-full md:w-14rem" />
          <Card title="Salifny" subTitle="Card Subtitle" className='w-full h-full'/>
          </div>
          </div>
        </div>
      </div>
      <DockNav />
    </div>
    </ThemeProvider>
  );
};

export default Dashboard;