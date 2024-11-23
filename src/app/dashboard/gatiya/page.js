"use client";

import React, { useState, useEffect } from "react";
import { PickList } from "primereact/picklist";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import "primereact/resources/themes/arya-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export default function Friends() {
  //Admin creates a group with a spesifc name
  //Admin adds the firends from their friends list
  //the ga6ya group will show the total amount of money for the whole group
  // the total amount of money will be detacted from each one in the group equally to be added to this group balance
  //all list friend can use this new created balance

  const [groupName, setGroupName] = useState(" ");
  const [totalBalance, setTotalBalance] = useState(" ");
  // const [availableFriends, setAvaliableFriends] = useState([]);
  // const [selectedFriends, setSelectedFriends] = useState([]);

  // By the library
  const [source, setSource] = useState([]); //avaliable
  const [target, setTarget] = useState([]); //selected

  // data fetch (added by yousif's wifey)
  useEffect(() => {
    const fetchFriends = async () => {
      const response = await fetch("http://localhost:3000/dashboard/friends");
      const friendsData = await response.json();
      setSource(friendsData);
    };
    fetchFriends();
  }, []);

  //add by library
  const onChange = (event) => {
    setSource(event.source);
    setTarget(event.target);
  };

  const handleSubmit = async () => {
    if (!groupName || !totalBalance || target.length === 0) {
      alert("Please fill all fields and select friends!");
      return;
    }

    //The calculation of the amount detected by each user (selected friends are the list of each group )
    // i think the math makes sense :)
    const deductedAmount =
      target.length > 0 && totalBalance != 0 ? totalBalance / target.length : 0;

    //this is the "Gatiya" Object / members has an issue /Fix :)
    const gatiya = {
      name: groupName,
      //groupMembars: selectedFriends,
      groupMembers: target.map((friend) => ({
        ...friend,
        deductedAmount,
      })),
      totalBalance,
    };

    try {
      const response = await fetch("localhost:3000/dashboard/gatiya", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gatiya),
      });

      if (!response.ok) {
        throw new Error("Failed to create Gatiya group.");
      }

      alert("Gatiya group created successfully!");
    } catch (error) {
      console.error("Error creating Gatiya group:", error);
      alert("There was an error creating the Gatiya group.");
    }
  };

  const friendstemplate = (friend) => {
    return (
      <div className="flex flex-wrap p-2 align-items-center gap-3">
        {/* <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} /> */}
        <div className="flex-1 flex flex-column gap-2">
          <span className="font-bold">{friend.name}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <h1 className="text-2xl text-center mb-8">GATIYA</h1>

      <div className="flex flex-row gap-8 w-full max-w-5xl mx-auto flex-1 items-center">
        <aside className="w-1/2 flex flex-col gap-5">
          <div>
            <label>GroupName</label>
            <InputText
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter Gatiya Group Name"
              className="p-inputtext-sm w-4 border border-gray-300 h-10"
            />
          </div>

          <div>
            <label>Total Gatiya Balance</label>
            <InputText
              id="totalBalance"
              value={totalBalance}
              onChange={(e) => setTotalBalance(e.target.value)}
              placeholder="Enter total balance of gatiya"
              className="p-inputtext-sm w-4 border border-gray-300 h-10"
            />
          </div>

          {/* {deductedAmount && 
      <div className="mt-4">
        <p>
          The Contributed Amount for each will be:
          <strong>{deductedAmount}</strong>
        </p>
      </div>
      } */}

          {target.length > 0 && totalBalance && (
            <div className="mt-4">
              <p>
                The Contributed Amount for each will be:{" "}
                {/* i made this red to be able to see it but i think it needs the friends list to show */}
                <strong className="text-red-400">{deductedAmount}</strong>
              </p>
            </div>
          )}
        </aside>

        <div className="w-1/2 flex flex-col">
          <label className="text-center">Select Friends</label>

          <div className="card">
            <PickList
              dataKey="id"
              source={source}
              target={target}
              onChange={onChange}
              itemTemplate={friendstemplate}
              filter
              filterBy="name"
              breakpoint="1280px"
              sourceHeader="Available"
              targetHeader="Selected"
              sourceStyle={{ height: "24rem" }}
              targetStyle={{ height: "24rem" }}
              sourceFilterPlaceholder="Search by name"
              targetFilterPlaceholder="Search by name"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 gap-0 text-center">
        <Button
          label="Create Your Gatiya"
          onClick={handleSubmit}
          className="mt-3"
        />
      </div>
    </div>
  );
}
