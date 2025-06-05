"use client";

import { useState } from "react";
import Lists from "./Lists";

export default function Home() {
  const [lists, setLists] = useState([
    {
      id: 1,
      todo: "Learn Next.js",
      completed: false,
    },
    {
      id: 2,
      todo: "Learn Tailwind CSS",
      completed: false,
    },
    {
      id: 3,
      todo: "Learn React.js",
      completed: false,
    },
  ]);

  const handleAddList = (e) => {
    let list = prompt("add list");
    if (!list) return;
    setLists([...lists, { id: Date.now(), todo: list, completed: false }]);
  };

  const handleDoneList = (id) => {
    const updatedLists = lists.map((list) => {
      if (list.id === id) {
        return { ...list, completed: !list.completed };
      }
      return list;
    });
    setLists(updatedLists);
  };

  const handleDeleteList = (id) => {
    console.log(id);
    const updatedLists = lists.filter((list) => {
      return list.id !== id;
    });
    setLists(updatedLists);
  };

  return (
    <div className="w-1/3 relative bg-white mt-20 mx-auto p-15 shadow-md rounded-md">
      <div className="flex justify-between">
        <div className="flex">
          <div className="text-5xl">12</div>
          <div className="">
            <div className="">Jan</div>
            <div>2016</div>
          </div>
        </div>
        <div>Tuesday</div>
      </div>
      <div className="mt-8">
        {lists.map((list, i) => (
          <Lists
            key={list.id}
            lists={lists[i]}
            handleDoneList={handleDoneList}
            handleDeleteList={handleDeleteList}
          />
        ))}

        <button
          className="absolute text-3xl left-1/2 -translate-x-1/2 bottom-[-35px] bg-blue-500 text-white rounded-full w-20 h-20 shadow-md hover:bg-blue-600 cursor-pointer"
          onClick={handleAddList}
        >
          +
        </button>
      </div>
    </div>
  );
}
