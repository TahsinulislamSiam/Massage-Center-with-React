import React from 'react';

const Toggle = () => {
    return (
        <div>
            const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleChange = (e) => {
    setTheme(e.target.checked ? "synthwave" : "light");
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <span className="label-text text-lg">Theme</span>
      <input
        type="checkbox"
        className="toggle"
        onChange={handleChange}
        checked={theme === "synthwave"}
      />
    </label>
  );
};
        </div>
    );
};

export default Toggle;