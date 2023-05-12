import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../axios-client";

const OrderDetail = () => {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const { data } = await axiosClient.get(`/carts/${id}`);
      setOrder(data.data);
      setIsLoading(false);
    };
    getData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...........</p>;
  }
  return <div>{order && order.cart_id}</div>;
};

export default OrderDetail;
