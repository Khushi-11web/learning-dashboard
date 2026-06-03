"use client";

import { motion } from "framer-motion";

interface HeroTileProps {
  activeCourses: number;
  hoursLearned: number;
  certificates: number;
}

export default function HeroTile({
  activeCourses,
  hoursLearned,
  certificates,
}: HeroTileProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-purple-500 via-transparent to-fuchsia-500 pointer-events-none" />

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-zinc-400 mt-3">
          🔥 15 Day Learning Streak
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="bg-zinc-800/70 rounded-2xl p-4 border border-zinc-700">
            <p className="text-zinc-400 text-sm">
              Active Courses
            </p>
            <h2 className="text-2xl font-bold mt-1">
              {activeCourses}
            </h2>
          </div>

          <div className="bg-zinc-800/70 rounded-2xl p-4 border border-zinc-700">
            <p className="text-zinc-400 text-sm">
              Hours Learned
            </p>
            <h2 className="text-2xl font-bold mt-1">
              {hoursLearned}
            </h2>
          </div>

          <div className="bg-zinc-800/70 rounded-2xl p-4 border border-zinc-700">
            <p className="text-zinc-400 text-sm">
              Certificates
            </p>
            <h2 className="text-2xl font-bold mt-1">
              {certificates}
            </h2>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
