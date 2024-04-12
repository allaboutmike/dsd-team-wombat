import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface response {
  requestId?: string;
  date?: string;
  approvalStatus?: string;
  state?: string;
}

interface requestParams {
  userId: number;
  imgSrc: string | null;
}

export default function useSubmitRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (
    params: requestParams,
  ): Promise<response | null> => {
    try {
      const response = await fetch("http://localhost:8080/access_request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(params),
      });

      const data: response = await response.json();

      if (data.approvalStatus === "Approved") {
        navigate("/Success");
      } else if (data.approvalStatus === "Denied") {
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
  };

  return { handleSubmit, isLoading, error };
}
