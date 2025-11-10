"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="size-11 sm:size-12 min-w-[44px] min-h-[44px]"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-5 w-5 sm:h-6 sm:w-6 text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
}
