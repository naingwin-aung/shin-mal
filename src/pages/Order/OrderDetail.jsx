import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../axios-client";

const OrderDetail = () => {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const { data } = await axiosClient.get(`/carts/${id}`);
    setOrder(data.data);
    setIsLoading(false);
  };

  if (isLoading) {
    return <p>Loading...........</p>;
  }
  return <div>{order && order.cart_id}</div>;
};

export default OrderDetail;
