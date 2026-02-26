"use client";
import { motion } from "framer-motion";

export default function TaskList({ tasks, setTasks }) {
  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  return (
    <ul>
      {tasks.map((task, i) => (
        <motion.li
          key={i}
          whileHover={{ scale: 1.05 }}
          onClick={() => toggleTask(i)}
          style={{
            textDecoration: task.done ? "line-through" : "none",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          {task.text}
        </motion.li>
      ))}
    </ul>
  );
}
