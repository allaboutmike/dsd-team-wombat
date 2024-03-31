// import { useState } from "react";
import "./App.css";
import WebcamCapture from "./Components/Webcam";
import Nav from "./Components/Nav";

function App() {

  return (
    <>
      <Nav />
      <h2 className="text-lg font-semibold leading-6 text-zinc-700">center yourself - look into camera - capture</h2>
      <WebcamCapture />

    </>
  );
}

export default App;
