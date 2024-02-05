import { useEffect } from "react";
import { useState } from "react";

export function useDataApi(apiEndpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(apiEndpoint);
        if (!resp.ok) throw new Error(resp.statusText);
        const result = await resp.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };
    if(apiEndpoint) fetchData();
  },[apiEndpoint]);

  return {data, loading , error}
}
