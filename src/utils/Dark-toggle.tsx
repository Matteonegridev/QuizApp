import { useEffect, useState } from "react";

const moonPath =
  "M17.5 28C17.5 43.1878 28.5681 55.5 27.5 55.5C12.3122 55.5 0 43.1878 0 28C0 12.8122 12.3122 0.5 27.5 0.5C27.5 0.5 17.5 12.8122 17.5 28Z";

const sunPath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const initialState = () => {
  const dark = sessionStorage.getItem("darkMode");
  return dark ? JSON.parse(dark) : false;
};

function DarkToggle() {
  const [isDark, setIsDark] = useState(initialState);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) return root.classList.add("dark");
    else return root.classList.remove("dark");
  }, [isDark]);

  useEffect(() => {
    sessionStorage.setItem("darkMode", JSON.stringify(isDark));

    return () => {
      sessionStorage.removeItem("darkMode");
    };
  }, [isDark]);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      className={` w-10 h-10 rounded-[50%]  ${
        isDark ? "bg-blue-400" : "bg-black"
      }  flex justify-center items-center`}
      onClick={toggleDark}
    >
      {isDark ? (
        <svg
          id="darkMode"
          width="20"
          height="20"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className="sun" d={sunPath} fill="#ffdd59" fillOpacity="1" />
        </svg>
      ) : (
        <svg
          id="darkMode"
          width="20"
          height="20"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className="sun" d={moonPath} fill="#ffdd59" fillOpacity="1" />
        </svg>
      )}
    </button>
  );
}

export default DarkToggle;
