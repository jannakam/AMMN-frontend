"use client"
import React, { useState } from 'react';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { ThemeProvider } from '@/components/ThemeContext';
import DockNav from '@/components/DockNav';
import { Card } from 'primereact/card';

const Dashboard = () => {

  return (
    <ThemeProvider>
    <ThemeSwitcher />
    <div className="dashboard">
      <div className="header">
        <div className="search-avatar">
          <span className="p-input-icon-left">
            <InputText placeholder="Search" className='p-1'/>
          </span>
          <Avatar icon="pi pi-user" shape="circle" />
        </div>
      </div>
      
      <div className="content flex flex-row justify-center items-center m-40 h-full">
        <div className="left-half m-5">
          {/* Add your widgets for the left half here */}
          <Card title="Wallet" subTitle="Card Subtitle"/>
        </div>
        
        
        <div className="right-half m-5">
          {/* Add your widgets for the right half here */}
          <div className='flex flex-col justify-center items-center h-full'>
          <Card title="Gatiya" subTitle="Card Subtitle"/>
          <Card title="Salifny" subTitle="Card Subtitle"/>
          </div>
        </div>
      </div>
      <DockNav />
    </div>
    </ThemeProvider>
  );
};

export default Dashboard;