import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Unsuccessful from "./pages/Unsuccessful";
import Successful from "./pages/Successful";
import Capture from "./pages/Capture";
import Nav from "./Components/Nav";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      savedMode = "light"; //can change this to automatically set to browser's default mode
      setDarkMode(false);
      localStorage.setItem("displayMode", savedMode);
    }
    setDarkMode(savedMode === "dark" ? true : false);
  }, [setDarkMode]);

  const toggleDisplayMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-slate-800 h-screen">
        <div className="h-[60rem]">
          <Nav />
          <Routes>
            <Route path="/" element={<Capture />} />
            <Route path="/Successful" element={<Successful />} />
            <Route path="/Unsuccessful" element={<Unsuccessful />} />
            <Route path="/*" element={<Successful />} />
          </Routes>
        </div>
        <button
          onClick={toggleDisplayMode}
          className="transition duration-400 ml-10 dark:bg-gray-100 dark:text-slate-700 bg-slate-800 text-slate-100 border font-bold p-3 rounded-[50px]"
        >
          [theme]
        </button>
      </div>
    </div>
  );
}
