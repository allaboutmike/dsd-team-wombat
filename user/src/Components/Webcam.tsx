import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
  const [imgSrc, setImgSrc] = useState(null);
  const [badgeId, setBadgeId] = useState("");
  const [taken, setIsTaken] = useState(false);
  const [isValid, setIsValid] = useState(null);
  const [error, setError] = useState("");

  const webcamRef: any = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setIsTaken(true);
  }, [webcamRef, setImgSrc]);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch("", {
      method: "GET",
      body: JSON.stringify({
        image: imgSrc,
      }),
    });

    const data = await res.json();

    if (data.error) {
      return setError(data.error);
    }

    setIsValid(data.access_request);
  }

  return (
    <>
      <form>
        <div>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          {imgSrc && <img src={imgSrc} />}
        </div>

        <button onClick={capture} type="button">
          Capture photo
        </button>

        {taken ? (
          <>
            <input
              type="text"
              value={badgeId}
              onChange={(e) => {
                setBadgeId(e.target.value);
              }}
            />
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>

            <p>{error}</p>
          </>
        ) : null}
      </form>
    </>
  );
};

// ReactDOM.render(<WebcamCapture />, document.getElementById("root"));

export default WebcamCapture;
