import "./App.css";
import WebcamCapture from "./Components/Webcam";
import Home from "./pages/Home";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Successful from "./pages/Successful";
import Unsuccessful from "./pages/Unsuccessful";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Capture" element={<WebcamCapture />} />
        <Route path="/Successful" element={<Successful />} />
        <Route path="/Unsuccessful" element={<Unsuccessful />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;


