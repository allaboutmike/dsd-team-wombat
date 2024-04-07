import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import placeholderImg from "../assets/images/placeholderImg.png";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";

// TODO: Make a reusable button component
// TODO: Make a reusable container component

const WebcamCapture = () => {
  const [imgSrc, setImgSrc] = useState(null);
  const [badgeId, setBadgeId] = useState("");
  const [taken, setIsTaken] = useState(false);
  const [isValid, setIsValid] = useState(null);
  const [error, setError] = useState("");
  const [initCam, setInitCam] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const webcamRef: any = useRef(null);

  const navigate = useNavigate();

  const startCam = useCallback(() => {
    // isLoading(true);
    setInitCam(true);
  }, [initCam, setInitCam]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setIsTaken(true);
  }, [webcamRef, setImgSrc]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setIsLoading(true);

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const body = JSON.stringify({
      userId: badgeId,
      base64Image: imgSrc,
    });

    const res = await fetch("http://localhost:8080/access_request", {
      method: "POST",
      headers: headers,
      body: body,
    });

    const data = await res.json();

    setIsLoading(false);

    if (data.error) {
      return setError(data.error);
    }

    if (data) {
      navigate("/Successful");
    } else {
      navigate("/Unsuccessful");
    }

    console.log(data);
    setIsValid(data);
  }

  return (
    <>
      <h2 className="text-lg font-semibold leading-6 text-zinc-700">
        Center Yourself | Look into the Camera | Capture Image | Submit
      </h2>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <form>
          {initCam ? (
            <div className="flex mx-auto justify-center my-6 sm:px-6 lg:px-8">
              <div className="mr-8">
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                />
                <div className=" mx-auto px-4 sm:px-6 lg:px-8 mt-4  sm:flex-none flex justify-center">
                  <button
                    onClick={capture}
                    type="button"
                    className="block rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                  >
                    Capture photo
                  </button>
                </div>
              </div>

              <div className="ml-8">
                {imgSrc && <img src={imgSrc} />}
                <div className=" mx-auto px-4 sm:px-6 lg:px-8 mt-4  sm:flex-none flex justify-center">
                  {taken ? (
                    <>
                      <input
                        className="mr-4 ml-8  text-center outline-slate-700 text-slate-700 border-2 border-slate-600 border-opacity-50 rounded-md"
                        placeholder="Enter Badge ID"
                        type="text"
                        value={badgeId}
                        onChange={(e) => {
                          setBadgeId(e.target.value);
                        }}
                      />

                      <button
                        type="submit"
                        className="block rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>

                      <p>{error}</p>
                    </>
                  ) : (
                    <img src={placeholderImg} alt="capture placeholder" />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-center">
                <button
                  onClick={startCam}
                  type="button"
                  className="flex rounded-md bg-teal-600 my-8 px-6 py-6 text-center text-6xl font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Click to initiate camera
                </button>
              </div>
            </>
          )}
        </form>
      )}
    </>
  );
};

export default WebcamCapture;
