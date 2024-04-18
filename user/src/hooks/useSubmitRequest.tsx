import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface response {
  requestId?: string;
  date?: string;
  approvalStatus?: string;
  state?: string;
}

interface requestParams {
  userId: number;
  base64Image: string | null;
}

export default function useSubmitRequest() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  async function handleSubmit(params: requestParams): Promise<response | null> {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL_SERVER}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(params),
        }
      );

      const data: response = await response.json();

      if (data.approvalStatus === "APPROVED") {
        navigate("/Success");
      } else if (data.approvalStatus === "DENIED") {
        navigate("/Unsuccessful", {
          state: { requestId: data.requestId, requestDate: data.date },
        });
      } else {
        navigate("/Unsuccessful");
      }

      return data;
    } catch (error) {
      console.error(error);
      setError((error as Error).message);
      navigate("/Unsuccessful", { state: { error: (error as Error).message } });
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  return { handleSubmit, isLoading, error };
}
