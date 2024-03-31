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
      method: "POST",
      body: JSON.stringify({
        image: imgSrc,
        badgeId: badgeId,
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
        <div className="flex mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
          </div>

          <div>
            {imgSrc && <img src={imgSrc} />}
          </div>
        </div>

        <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4  sm:flex-none flex justify-center">
          <button onClick={capture} type="button" className="block rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
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
              
                <button type="submit" className="block rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600" onClick={handleSubmit}>
                  Submit
                </button>            
            
            <p>{error}</p>
          </>
        ) : null}
        </div>
      </form>
    </>
  );
};

// ReactDOM.render(<WebcamCapture />, document.getElementById("root"));

export default WebcamCapture;
