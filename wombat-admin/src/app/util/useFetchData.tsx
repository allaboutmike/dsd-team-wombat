import { useCallback, useEffect } from "react";

const useFetchData = (url: string, path: string, onDataReceived: (jsonData: any) => void) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${url}/${path}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const jsonData = await response.json();
                onDataReceived(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData()
    }, [url, path, onDataReceived]);
};

export default useFetchData;
