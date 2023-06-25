"use client";
import React from "react";
import useThemeSwitcher from "./useThemeSwitcher";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = ({ size = 24, className = "", IconClassName = "" }) => {
  const { mode, setMode } = useThemeSwitcher();

  return (
    <button
      className={`${className}`}
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
    >
      {mode === "dark" ? (
        <Sun size={size} className={`fill-dark stroke-dark ${IconClassName}`} />
      ) : (
        <Moon className={`fill-dark stroke-dark ${IconClassName}`} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
