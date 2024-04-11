import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
import RequestOverrideButton from "../Components/RequestOverrideButton.tsx";

export default function Unsuccessful() {
  const [badgeId, setBadgeId] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useNavigate();
  const location = useLocation();

  const { requestId } = location.state || {};
  const { requestDate } = location.state || {};

  return (
    <>
      {" "}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1 className="block rounded-md bg-red-400 px-10 py-10 text-center text-3xl font-semibold text-red-900 shadow-sm">
            Unable to verify at this time.
            <br />
            If you would like to request administrator review, submit
            information below.
          </h1>
          <form className="w-[450px]">
            <div className="mb-5">
              <input
                className="w-full py-2 px-4 rounded bg-[#4b5563] text-white mb-5 focus:outline-none"
                type="text"
                placeholder="Enter BadgeID"
                value={badgeId}
                onChange={(e) => {
                  setBadgeId(e.target.value);
                }}
              />
            </div>

            {requestId && requestDate && (
              <RequestOverrideButton
                requestId={requestId}
                requestDate={requestDate}
              />
            )}
          </form>
        </>
      )}
      <p>{error}</p>
    </>
  );
}
