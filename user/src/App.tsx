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
  }, []);

  const toggleDisplayMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-[#18214A] h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<Capture />} />
          <Route path="/Successful" element={<Successful />} />
          <Route path="/Unsuccessful" element={<Unsuccessful />} />
          <Route path="/*" element={<Successful />} />
        </Routes>
        <button
          onClick={toggleDisplayMode}
          className="transition duration-400 dark:bg-gray-100 dark:text-gray-700 bg-gray-700 text-gray-100 border font-bold p-3 rounded-lg"
        >
          mode
        </button>
      </div>
    </div>
  );
}
