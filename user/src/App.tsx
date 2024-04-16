import { Route, Routes } from "react-router-dom";
import Unsuccessful from "./pages/Unsuccessful";
import Successful from "./pages/Successful";
import Capture from "./pages/Capture";
import Nav from "./Components/Nav";

export default function App() {
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
