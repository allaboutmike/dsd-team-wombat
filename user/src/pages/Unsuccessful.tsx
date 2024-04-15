import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useInitiateRequestOverride from "../hooks/useInitiateRequestOverride.tsx";

export default function Unsuccessful() {
  const [approvalStatus, setApprovalStatus] = useState<string>("DENIED");
  const [requestSent, setRequestSent] = useState<boolean>(false);
  const [checkState, setCheckState] = useState<string>("");
  const [badgeId, setBadgeId] = useState<number>();
  const [status, setStatus] = useState<string>("");

  const navigate = useNavigate();

  const location = useLocation();
  const { requestId } = location.state || {};
  const { requestDate } = location.state || {};

  const { initiateRequestOverride, loading, error } =
    useInitiateRequestOverride();

  const handleClick = async () => {
    const dto = {
      approvalStatus: "DENIED",
      date: requestDate,
      state: "MANUAL_OVERRIDE_REQUESTED",
    };
    const updatedRequest = await initiateRequestOverride(requestId, dto);
    if (updatedRequest) {
      setStatus("Request submitted, pending Admin review.");
      setRequestSent(true);
    }
  };

  async function checkStatus() {
    try {
      const res = await fetch(
        `http://localhost:8080/access_request/${requestDate}/${requestId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const data = await res.json();
      setCheckState(data.state);
      setApprovalStatus(data.approvalStatus);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (requestSent) {
      const intervalGet = setInterval(function () {
        checkStatus();
        if (
          checkState === "MANUAL_OVERRIDE_ACTIONED" ||
          checkState === "MANUAL_OVERRIDE_TIMEOUT"
        ) {
          clearInterval(intervalGet);

          if (approvalStatus === "APPROVED") {
            navigate("/Successful");
          } else {
            alert("Please connect with Admin. Login has failed");
            setTimeout(function () {
              navigate("/");
            }, 3000);
          }
        }
      }, 15000);
    }
  }, [requestSent]);

  return (
    <>
      <h1 className="block rounded-md bg-red-400 px-10 py-10 text-center text-3xl font-semibold text-red-900 shadow-sm">
        Unable to verify at this time.
        <br />
        If you would like to request administrator review, submit information
        below.
      </h1>
      <form className="w-[450px]">
        <div className="mb-5">
          <input
            className="w-full py-2 px-4 rounded bg-[#4b5563] text-white mb-5 focus:outline-none"
            type="number"
            placeholder="Enter BadgeID"
            value={badgeId}
            onChange={(e) => {
              setBadgeId(parseInt(e.target.value));
            }}
          />
        </div>

        {requestId && requestDate && (
          <div>
            <button onClick={handleClick} disabled={loading}>
              Request Admin Override
            </button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {status && <p>{status}</p>}
          </div>
        )}
      </form>
    </>
  );
}
