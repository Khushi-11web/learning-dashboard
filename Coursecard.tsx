"use client";

import { motion } from "framer-motion";
import { Code, Globe, Cloud, Database } from "lucide-react";

interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}

export default function CourseCard({
  course,
}: {
  course: Course;
}) {
  const getIcon = (iconName: string) => {
  switch (iconName) {
    case "code":
      return <Code size={26} />;
    case "globe":
      return <Globe size={26} />;
    case "cloud":
      return <Cloud size={26} />;
    default:
      return <Database size={26} />;
  }
};

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:shadow-xl hover:shadow-purple-500/20 transition"
    >
      {/* Glow dot */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-purple-500 via-transparent to-fuchsia-500 rounded-3xl pointer-events-none" />
      <div className="relative z-10">
      {/* Icon */}
      <div className="mb-4 text-purple-400">
        {getIcon(course.icon_name)}
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-white mb-2">
        {course.title}
      </h2>

      {/* Progress text */}
      <div className="flex justify-between items-center text-sm text-zinc-400 mb-3">
        <span>Progress</span>
        <span className="text-purple-300 font-medium">
          {course.progress}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${course.progress}%` }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full"
        />
      </div>
    </div>
    </motion.article>
  );
}