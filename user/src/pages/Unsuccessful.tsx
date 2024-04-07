import VerifyModal from "../Components/Modal";
import { openModal } from "../Components/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Unsuccessful = () => {
  const [badgeId, setBadgeId] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e: any) {
    e.preventDefault();

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
      <div>
        <button
          type="button"
          onClick={() => openModal("verify_modal")}
          className="rounded-md bg-teal-600 px-3 py-2 my-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        >
          Request Admin Verification
        </button>
      </div>

      <VerifyModal id="verify_modal">
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

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full block rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Request Admin Override
          </button>
        </form>
      </VerifyModal>

      <p>{error}</p>
    </>
  );
};
export default Unsuccessful;
