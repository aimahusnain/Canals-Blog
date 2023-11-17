"use client"
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { Sun } from "lucide-react";
import React from "react";
import { MoonIcon, SunIcon } from "../Icons";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === 'dark' ? <SunIcon className='' size={30} /> : <MoonIcon className='' size={30} />}
    </button>
  );
}
