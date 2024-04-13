import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import placeholderImg from "../assets/images/placeholderImg.png";
import LoadingSpinner from "./LoadingSpinner";
import { MouseEvent } from "react";
import Prompts from "./Prompts";
import CamPrompts from "./CamPrompts";
import useSubmitRequest from "../hooks/useSubmitRequest.tsx";

// TODO: Make a reusable button component
// TODO: Make a reusable container component

export default function WebcamCapture() {
  const [badgeId, setBadgeId] = useState("");
  const [taken, setIsTaken] = useState(false);
  const [initCam, setInitCam] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null | undefined>(null);
  const webcamRef = useRef<Webcam>(null);
  const { handleSubmit, isLoading, error } = useSubmitRequest();

  const startCam = useCallback(() => {
    setInitCam(true);
  }, [setInitCam]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImgSrc(imageSrc);

    setIsTaken(true);
  }, [webcamRef, setImgSrc]);

  const handleFormSubmit = (e: MouseEvent) => {
    e.preventDefault();
    const userIdNumber = parseInt(badgeId, 10);
    if (isNaN(userIdNumber)) {
      console.error("Badge ID must be a number");
      return;
    }

    const imageSrc = imgSrc !== undefined ? imgSrc : null;
    handleSubmit({ userId: userIdNumber, imgSrc: imageSrc });
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <form>
          {initCam ? (
            <>
              <Prompts />
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
                          type="number"
                          value={badgeId}
                          onChange={(e) => {
                            setBadgeId(e.target.value);
                          }}
                        />

                        <button
                          type="submit"
                          className="block rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                          onClick={handleFormSubmit}
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
            </>
          ) : (
            <>
              <CamPrompts />
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
}
