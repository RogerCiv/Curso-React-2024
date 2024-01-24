import { useEffect } from "react";
import { useState } from "react";

export function useDataApi(apiEndpoint,newData) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(apiEndpoint);
        if (!resp.ok) throw new Error("Error fetching data");
        const result = await resp.json();

        setData(result);

      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() =>{
            setLoading(false);
        },3000 )
      }
    };
    if(apiEndpoint){

      fetchData();
    }
  }, [apiEndpoint]);
  return { data, loading, error };
}
