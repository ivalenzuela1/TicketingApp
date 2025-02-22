"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import React from "react";
import { Button } from "./ui/button";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="outline" size="icon" disabled={true}></Button>;
  }

  const dark = theme === "dark";

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={
          theme === "light"
            ? () => {
                setTheme("dark");
              }
            : () => {
                setTheme("light");
              }
        }
      >
        {dark ? (
          <Sun className="hover:cursor-pointer hover:text-primary" />
        ) : (
          <Moon className="hover:cursor-pointer hover:text-primary" />
        )}
      </Button>
    </div>
  );
};

export default ToggleMode;
