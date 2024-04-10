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
          <h1 className="text-2xl font-semibold mb-7 text-white">
            Enter your information
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
