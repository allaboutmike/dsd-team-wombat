import "./App.css";
import Home from "./pages/Home";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Successful from "./pages/Successful";
import Unsuccessful from "./pages/Unsuccessful";
import Capture from "./pages/Capture";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Capture" element={<Capture />} />
        <Route path="/Successful" element={<Successful />} />
        <Route path="/Unsuccessful" element={<Unsuccessful />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
