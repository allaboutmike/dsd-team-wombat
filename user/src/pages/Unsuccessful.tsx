import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
import { MouseEvent } from "react";

const Unsuccessful = () => {
  const [badgeId, setBadgeId] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e: MouseEvent) {
    e.preventDefault();
    setIsLoading(true);
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const body = JSON.stringify({
      userId: badgeId,
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
      alert("Unable to verify. Contact your administrator you jerk.");
    }
  }
  return (
    <>
      {" "}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex-col justify-center align-middle items-center">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:flex-none flex justify-center">
              <h1 className="block rounded-md bg-red-400 px-10 py-10 text-center text-3xl font-semibold text-red-900 shadow-sm">
                Unable to verify at this time.
                <br />
                If you would like to request administrator review, submit
                information below.
              </h1>
            </div>

            <form className="w-[450px] flex-col items-center mx-auto mt-10">
              <div className="mb-5">
                <input
                  className="w-full text-lg text-center py-6 px-8 rounded bg-[#4b5563] text-white mb-5 focus:outline-none"
                  type="text"
                  placeholder="Enter BadgeID"
                  value={badgeId}
                  onChange={(e) => {
                    setBadgeId(e.target.value);
                  }}
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full block rounded-md bg-teal-600 px-4 py-3 text-center text-md font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Request Admin Override
              </button>
            </form>
          </div>
        </>
      )}
      <p>{error}</p>
    </>
  );
};
export default Unsuccessful;
