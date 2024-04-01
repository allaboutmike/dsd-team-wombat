import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import placeholderImg from "../images/placeholderImg.png"


// TODO: Make button component
// TODO: Make container component

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
        <div className="flex mx-auto justify-around my-6 sm:px-6 lg:px-8">
          <div>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 mt-4  sm:flex-none flex justify-center">
              <button onClick={capture} type="button" className="block rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
              Capture photo
              </button>
            </div>

          </div>

          <div>
            {imgSrc && <img src={imgSrc} />}
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 mt-4  sm:flex-none flex justify-center">
              {taken ? (
                <>
                  <input 
                    className="mr-4 ml-8  text-center outline-slate-700 text-slate-700"
                    placeholder="Enter Badge ID"
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
              ) : <img src={placeholderImg} alt="capture placeholder" />}
            </div>
          </div>
        </div>


      </form>
    </>
  );
};

// ReactDOM.render(<WebcamCapture />, document.getElementById("root"));

export default WebcamCapture;
