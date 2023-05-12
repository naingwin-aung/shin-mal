import { useEffect, useState } from "react";
import axiosClient from "../axios-client";

const useLoadMore = (url, limit) => {
  const [value, setValue] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [canLoadMore, setCanLoadMore] = useState(true);

  useEffect(() => {
    getData();
  }, [currentPage]);

  const loadMore = () => {
    setIsLoading(true);
    setCurrentPage((prev) => prev + 1);
  };

  const getData = async () => {
    const { data } = await axiosClient.get(url, {
      params: {
        page: currentPage,
        limit: +limit,
      },
    });
    setValue((prev) => [...prev, ...data.data]);
    setCanLoadMore(data.can_load_more);
    setIsLoading(false);
  };

  return { value, isLoading, loadMore, canLoadMore };
};

export default useLoadMore;
