"use client";
import React, { useState } from "react";

const TaskInput = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
      <p className="text-gray-500 mb-6">Add a task:</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`e.g.\nI have a hackathon at 10am on Saturday\nFinish homework by 5pm`}
          rows={5}
          className="w-full px-5 py-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition resize-none"
        />
      </form>
    </div>
  );
};

export default TaskInput;
