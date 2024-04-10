import { useState } from "react";
import useInitiateRequestOverride from "../hooks/useInitiateRequestOverride.tsx";

export default function RequestOverrideButton({
  requestId,
  requestDate,
}: {
  requestId: string;
  requestDate: string;
}) {
  const { initiateRequestOverride, loading, error } =
    useInitiateRequestOverride();
  const [status, setStatus] = useState("");

  const handleClick = async () => {
    const dto = {
      approvalStatus: false,
      date: requestDate,
      state: "MANUAL_OVERRIDE_REQUESTED",
    };
    const updatedRequest = await initiateRequestOverride(requestId, dto);
    if (updatedRequest) {
      setStatus(`Request updated to state: ${updatedRequest.state}`);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        Request Admin Override
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {status && <p>{status}</p>}
    </div>
  );
}
