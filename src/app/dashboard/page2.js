"use client";
import React, { useState } from "react";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ThemeProvider } from "@/components/ThemeProvider";
import DockNav from "@/components/DockNav";
import { Card } from "primereact/card";
import { ListBox } from "primereact/listbox";
import LogoutButton from "@/components/LogoutButton";
import AnimatedCard from "@/components/AnimatedCard";
import { Badge } from "primereact/badge";

const Dashboard = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [selectedBankAccount, setSelectedBankAccount] = useState(null);
  const friends = [
    {
      profilePic:
        "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
      name: "Janna",
    },
    {
      profilePic:
        "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
      name: "Nora",
    },
    {
      profilePic:
        "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
      name: "Saja",
    },
    {
      profilePic:
        "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
      name: "Wahab",
    },
  ];

  const bankAccounts = [
    {
      bankName: "Kuwait Finance House",
      cardNumber: "**** **** **** 1234",
      expiration: "12/25",
    },
    {
      bankName: "National Bank of Kuwait",
      cardNumber: "**** **** **** 5678",
      expiration: "11/24",
    },
    {
      bankName: "Gulf Bank",
      cardNumber: "**** **** **** 9101",
      expiration: "10/23",
    },
  ];

  const profileData = [
    {
      profilePic: "https://via.placeholder.com/150",
      name: "John Doe",
      amount: 120.5,
      date: "2024-11-23T10:30:00",
    },
    {
      profilePic: "https://via.placeholder.com/150",
      name: "Jane Smith",
      amount: 75.0,
      date: "2024-11-20T15:00:00",
    },
  ];

  const bankAccountTemplate = (option) => (
    <div className="flex flex-col">
      <div className="font-bold">{option.bankName}</div>
      <div className="text-sm text-gray-500">
        {option.cardNumber} | Exp: {option.expiration}
      </div>
    </div>
  );

  const friendTemplate = (option) => (
    <div className="flex align-items-center">
      <Avatar
        image={option.profilePic}
        shape="circle"
        size="large"
        className="mr-2"
      />
      <span>{option.name}</span>
    </div>
  );

  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <div className="flex flex-col h-full m-10 ml-[110px]">
        <div className="w-full flex flex-row justify-end mb-5">
          <div className="search-avatar">
            <span className="p-input-icon-left">
              <InputText
                placeholder="Search"
                className="p-3 pl-3 bg-foreground w-96"
              />
            </span>
            <Avatar icon="pi pi-user" shape="circle" size="large" />
          </div>
        </div>

        <div className="content flex flex-row justify-center items-center gap-2">
          <div className="left-half w-full">
            {/* Wallet Card */}
            <Card
              title="Wallet"
              subTitle="Manage your personal funds"
              className="w-full h-full"
            >
              <div className="flex flex-col items-center justify-center gap-6">
                {/* Animated Card */}
                <div className="w-72 h-44 flex justify-center items-center">
                  <AnimatedCard />
                </div>

                {/* Balance */}
                <h1
                  className="text-5xl font-bold"
                  style={{ color: "var(--primary-color)" }}
                >
                  2000 KWD
                </h1>

                {/* Bank Accounts List */}
                <ListBox
                  value={selectedBankAccount}
                  onChange={(e) => setSelectedBankAccount(e.value)}
                  options={bankAccounts}
                  itemTemplate={bankAccountTemplate}
                  optionLabel="bankName"
                  className="w-full"
                />
              </div>
            </Card>
          </div>

          <div className="right-half w-full gap-2">
            {/* Right Side Widgets */}
            <div className="flex flex-col justify-center items-center w-full gap-2">
              <Card title="Gatiya" subTitle="Card Subtitle" className="w-full">
                <div className="flex flex-wrap gap-4 justify-center">
                  <Card title="Gatiya 1" subTitle="Amount" className="w-1/4" />
                  <Card title="Gatiya 2" subTitle="Amount" className="w-1/4" />
                  <Card title="Gatiya 3" subTitle="Amount" className="w-1/4" />
                  <Card title="Gatiya 4" subTitle="Amount" className="w-1/4" />
                  <Card title="Gatiya 5" subTitle="Amount" className="w-1/4" />
                  <Card title="Gatiya 6" subTitle="Amount" className="w-1/4" />
                </div>
              </Card>

              <div className="flex flex-row w-full gap-2">
                <ListBox
                  filter
                  value={selectedFriend}
                  onChange={(e) => setSelectedFriend(e.value)}
                  options={friends}
                  itemTemplate={friendTemplate}
                  optionLabel="name"
                  className="w-full md:w-14rem .p-listbox .p-inputtext"
                />

                <Card
                  title="Salifny"
                  subTitle="Card Subtitle"
                  className="w-full"
                >
                  {profileData.map((item, index) => (
                    <Card key={index}>
                      <div className="flex flex-row gap-4 justify-between">
                        <div className="flex flex-row gap-4">
                          <Avatar
                            className="p-overlay-badge"
                            image={item.profilePic}
                            alt={`${item.name}'s profile`}
                            size="medium"
                            shape="circle"
                          >
                            <Badge value="2" severity="danger" />
                          </Avatar>

                          <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {new Date(item.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col items-end">
                          <h3 className="text-sm font-semibold">
                            Amount Remaining:
                          </h3>

                          <p
                            className="text-l font-medium"
                            style={{ color: "var(--primary-color)" }}
                          >
                            Amount: ${item.amount}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </Card>
              </div>
            </div>
          </div>
        </div>
        <DockNav />
        <div className="relative">
          <LogoutButton />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
