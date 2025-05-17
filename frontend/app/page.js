"use client";
import { useState } from "react";

// Placeholder for ML parsing function
async function parseTaskWithML(taskText) {
  // TODO: Replace this with actual ML call
  // Example: "Meeting from 2pm to 3pm" => { startHour: 14, endHour: 15, text: "Meeting" }
  // For now, just put the task at 9am as a demo
  return { startHour: 9, endHour: 10, text: taskText };
}

export default function Home() {
  const [task, setTask] = useState("");
  const [tasksByHour, setTasksByHour] = useState(Array(24).fill(""));

  const handleInputChange = (e) => setTask(e.target.value);

  const handleAddTask = async () => {
    if (task.trim() === "") return;
    // Use ML to parse the task
    const parsed = await parseTaskWithML(task);
    const updated = [...tasksByHour];
    for (let h = parsed.startHour; h < parsed.endHour; h++) {
      updated[h] = parsed.text;
    }
    setTasksByHour(updated);
    setTask("");
  };

  return (
    <main style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <h1>Daily Bot Task Planner</h1>
      <div style={{ marginBottom: 24, display: "flex", gap: 8 }}>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder='e.g. "Meeting from 2pm to 3pm"'
          style={{ width: "70%", padding: 8, fontSize: 16 }}
        />
        <button
          onClick={handleAddTask}
          style={{
            padding: "8px 16px",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </div>
      <section>
        <h2>Today's Tasks by Hour</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {Array.from({ length: 24 }).map((_, hour) => (
            <div
              key={hour}
              style={{
                border: "1px solid #ccc",
                borderRadius: 6,
                padding: 12,
                display: "flex",
                alignItems: "center",
                background: "#fafafa",
              }}
            >
              <div style={{ width: 110, fontWeight: "bold" }}>
                {hour}:00 - {hour + 1}:00
              </div>
              <div style={{ flex: 1, marginLeft: 16 }}>
                {tasksByHour[hour] ? (
                  <span>{tasksByHour[hour]}</span>
                ) : (
                  <span style={{ color: "#bbb" }}>No task</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}