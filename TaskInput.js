"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TaskInput({ tasks, setTasks }) {
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input) return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  return (
    <motion.div initial={{ y: -20 }} animate={{ y: 0 }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task..."
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={addTask}>Add</button>
    </motion.div>
  );
}
