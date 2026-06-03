"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  const shades = [
    "bg-green-300",
    "bg-green-500",
    "bg-green-700",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-emerald-500 via-transparent to-green-700 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-xl">
            Activity
          </h2>

          <span className="text-sm text-zinc-400">
            Last 35 Days
          </span>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: i * 0.02,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className={`h-4 w-4 rounded ${shades[i % 3]}`}
            />
          ))}
        </div>

        <div className="flex justify-between mt-4 text-xs text-zinc-500">
          <span>Less</span>
          <span>More</span>
        </div>
      </div>
    </motion.section>
  );
}