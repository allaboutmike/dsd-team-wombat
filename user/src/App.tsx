// import { useState } from "react";
import "./App.css";
import WebcamCapture from "./Components/Webcam";

function App() {

  return (
    <>
      <h1 className="text-8xl bg-clip-text text-transparent bg-gradient-to-b from-gray-300 to-gray-700">Wombat Visage</h1>
      <h1 className="text-3xl">center yourself - look into camera - capture</h1>
      <WebcamCapture />

    </>
  );
}

export default App;
