import React, { useEffect, useState } from 'react';

const ThemeController = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="p-2">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className='px-4 py-3 bg-green-900 text-white rounded dark:bg-emerald-800 transition-all cursor-pointer'
      >
        ({theme} mode)
      </button>
    </div>
  );
};

export default ThemeController;
