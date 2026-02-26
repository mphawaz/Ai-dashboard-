"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Clock from "../components/Clock";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main style={{ padding: "40px" }}>
      <Navbar />
      <Clock />
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <ProgressBar tasks={tasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </main>
  );
}
