"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`h-[1.2rem] w-[1.2rem] ${isDark ? "text-gray-500" : "text-yellow-500"}`} />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="transition-colors"
      />
      <Moon className={`h-[1.2rem] w-[1.2rem] ${isDark ? "text-blue-500" : "text-gray-500"}`} />
    </div>
  );
}
