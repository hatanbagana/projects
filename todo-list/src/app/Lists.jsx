import React from "react";

function Lists({ lists, handleDoneList, handleDeleteList } = lists) {
  return (
    <div className="w-full flex justify-between my-2">
      <div className={`w-3/4  ${lists.completed ? "line-through" : null} `}>
        {lists.todo}
      </div>
      <div className="w-1/4 flex justify-around">
        <div
          onClick={() => handleDoneList(lists.id)}
          className="cursor-pointer"
        >
          {lists.completed ? "✗" : "✓"}
        </div>
        <div
          onClick={() => handleDeleteList(lists.id)}
          className="cursor-pointer"
        >
          -
        </div>
      </div>
    </div>
  );
}

export default Lists;
