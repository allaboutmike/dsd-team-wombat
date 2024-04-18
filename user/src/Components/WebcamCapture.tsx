import placeholderImg from "../assets/images/placeholderImg.png";
import useSubmitRequest from "../hooks/useSubmitRequest.tsx";
import { useRef, useState, useCallback } from "react";
import LoadingSpinner from "./LoadingSpinner";
import CamPrompts from "./CamPrompts";
import { MouseEvent } from "react";
import Webcam from "react-webcam";
import Prompts from "./Prompts";

export default function WebcamCapture() {
  const [badgeId, setBadgeId] = useState<number>(0);
  const [taken, setIsTaken] = useState<boolean>(false);
  const [initCam, setInitCam] = useState<boolean>(false);
  const [base64Image, setBase64Image] = useState<string | null | undefined>(
    null
  );

  const webcamRef = useRef<Webcam>(null);
  const { handleSubmit, isLoading, error } = useSubmitRequest();

  const startCam = useCallback(
    function () {
      setInitCam(true);
    },
    [setInitCam]
  );

  const capture = useCallback(
    function () {
      const imageSrc = webcamRef.current?.getScreenshot();
      setBase64Image(imageSrc);

      setIsTaken(true);
    },
    [webcamRef, setBase64Image]
  );

  function handleFormSubmit(e: MouseEvent) {
    e.preventDefault();
    if (isNaN(badgeId)) {
      console.error("Badge ID must be a number");
      return;
    }

    const imageSrc = base64Image !== undefined ? base64Image : null;
    handleSubmit({ userId: badgeId, base64Image: imageSrc });
  }

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
                    className="rounded-[50px] dark:shadow-slate-900 dark:shadow-lg shadow-lg"
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
                  {/* {base64Image && <img src={base64Image} />} */}
                  {base64Image && (
                    <img
                      src={base64Image}
                      className="rounded-[50px] dark:shadow-slate-900 dark:shadow-lg shadow-lg"
                    />
                  )}
                  <div className=" mx-auto px-4 sm:px-6 lg:px-8 mt-4  sm:flex-none flex justify-center">
                    {taken ? (
                      <>
                        <input
                          className="mr-4 ml-8  text-center outline-slate-700 text-slate-700 border-2 border-slate-600 border-opacity-50 rounded-md"
                          placeholder="Enter Badge ID"
                          type="number"
                          value={badgeId}
                          onChange={function (e) {
                            setBadgeId(parseInt(e.target.value, 10));
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
                      <img
                        src={placeholderImg}
                        alt="capture placeholder wombat logo"
                        className="mt-[-1rem] rounded-[50px] dark:shadow-lg dark:shadow-slate-900 shadow-lg h-[30rem]"
                      />
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
