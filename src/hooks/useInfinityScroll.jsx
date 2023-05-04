import { useEffect, useState } from "react";
import axiosClient from "../axios-client";

const useInfinityScroll = (url, limit) => {
  const [value, setValue] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(false);

  useEffect(() => {
    getData();
  }, [currentPage]);

  const handlescroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setIsLoading(true);
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);

    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  const getData = async () => {
    if (!lastPage) {
      const { data } = await axiosClient.get(url, {
        params: {
          page: currentPage,
          limit: +limit,
        },
      });
      setValue((prev) => [...prev, ...data.data]);
      setLastPage(data.data.length === 0);
    }
    setIsLoading(false);
  };

  return { value, isLoading };
};

export default useInfinityScroll;
