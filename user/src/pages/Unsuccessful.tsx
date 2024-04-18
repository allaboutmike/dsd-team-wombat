import useInitiateRequestOverride from "../hooks/useInitiateRequestOverride.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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

  async function handleClick() {
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
  }

  async function checkStatus() {
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL_SERVER
        }/${requestDate}/${requestId}`,
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

  useEffect(
    function () {
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
    },
    [requestSent]
  );

  return (
    <>
      <div className="mt-20">
        <h1 className="block dark:shadow-lg dark:shadow-slate-900 shadow-lg rounded-md bg-red-400 px-10 py-10 text-center text-3xl font-semibold text-red-900 w-[75%] mx-auto">
          Unable to verify at this time.
          <br />
          <br />
          If you would like to request administrator review, submit information
          below.
        </h1>
      </div>
      <div className="flex flex-col items-center mt-20">
        <form className="w-[450px]">
          <div className="mb-5 ">
            <input
              className="w-full dark:shadow-lg dark:shadow-slate-900 shadow-lg py-2 px-4 rounded bg-[#4b5563] text-white mb-5 focus:outline-none"
              type="number"
              placeholder="Enter BadgeID"
              value={badgeId}
              onChange={(e) => {
                setBadgeId(parseInt(e.target.value));
              }}
            />
          </div>
          <div className=" dark:shadow-lg dark:shadow-slate-950 h-40 bg-slate-200 border-slate-800 shadow-lg shadow-slate-700  rounded-[20px] mx-auto">
            {requestId && requestDate && (
              <div className="flex-col">
                <div className="mx-auto">
                  <button
                    className="ml-[15%] mt-[-5px] py-3 px-8 bg-sky-800 border-slate-900 shadow-lg shadow-slate-950 text-slate-300 text-2xl rounded-[10px]"
                    onClick={handleClick}
                    disabled={loading}
                  >
                    Request Admin Override
                  </button>
                </div>
                <div className="mt-4 text-xl font-mono font-bold text-center px-4 py-2">
                  {loading && <p>Loading...</p>}
                  {error && <p>Error: {error}</p>}
                  {status && <p>{status}</p>}
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
