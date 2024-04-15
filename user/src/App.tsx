// import "./App.css";
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
        <Route path="/" element={<Capture />} />
        <Route path="/Successful" element={<Successful />} />
        <Route path="/Unsuccessful" element={<Unsuccessful />} />
        <Route path="/*" element={<Successful />} />
      </Routes>
    </>
  );
}

export default App;