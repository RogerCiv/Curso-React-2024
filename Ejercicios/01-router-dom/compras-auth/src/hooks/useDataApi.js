import { useEffect } from "react";
import { useState } from "react";

export function useDataApi(endPoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const resp = await fetch(endPoint);
        if (!resp.ok) throw new Error(resp.statusText);
        const data = await resp.json();

        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    if(endPoint) fetchData();
  },[endPoint]);

  return { data, loading, error };
}
