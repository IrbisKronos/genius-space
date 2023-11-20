import axios from "axios";
import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data)
    } catch (error) {
      setError(error.message);
      console.warn('Something went wrong:', error);
    } finally { setIsLoading(false); };
  }

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
}