"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Book, Settings } from "lucide-react";

const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "courses", label: "Courses", icon: Book },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="w-20 md:w-64 bg-zinc-900 p-4 flex flex-col gap-3">
      <h1 className="text-purple-400 font-bold hidden md:block mb-4">
        LearnX
      </h1>

      {items.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="relative flex items-center gap-3 px-3 py-2 rounded-xl"
          >
            {active === item.id && (
              <motion.div
                layoutId="sidebar-highlight"
                className="absolute inset-0 bg-purple-500/20 rounded-xl"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              />
            )}

            <Icon className="relative z-10" />
            <span className="hidden md:block relative z-10">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
