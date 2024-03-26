import { useState } from "react";
import "./App.css";
import WebcamCapture from "./Components/Webcam";

function App() {

  return (
    <>
      <h1>Wombat Visage</h1>
      <WebcamCapture />

    </>
  );
}

export default App;
