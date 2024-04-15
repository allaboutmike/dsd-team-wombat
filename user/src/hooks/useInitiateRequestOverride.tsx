import { useState } from "react";

interface AccessRequestDTO {
  approvalStatus: string;
  state: string;
}

export default function useInitiateRequestOverride() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const initiateRequestOverride = async (
    requestId: string,
    dto: AccessRequestDTO
  ) => {
    setLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await fetch(
        `http://localhost:8080/access_request/${requestId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dto),
        }
      );

      setIsSuccess(true);
      return await response.json();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return { initiateRequestOverride, loading, error, isSuccess };
}
