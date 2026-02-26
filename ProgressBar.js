"use client";
import { motion } from "framer-motion";

export default function ProgressBar({ tasks }) {
  const progress =
    tasks.length === 0
      ? 0
      : (tasks.filter((t) => t.done).length / tasks.length) * 100;

  return (
    <div style={{ marginTop: "20px" }}>
      <motion.div style={{ height: "10px", background: "#222" }}>
        <motion.div
          animate={{ width: `${progress}%` }}
          style={{ height: "10px", background: "#00ff88" }}
        />
      </motion.div>
      <p>{progress.toFixed(0)}% Completed</p>
    </div>
  );
}
