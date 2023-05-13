import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../axios-client";
import styled from "styled-components";
import { formatter } from "../../helper/helper";
import OrderMenuItem from "../../components/Order/OrderMenuItem";

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

  const totalAmount =
    order && order.menus.reduce((acc, menu) => acc + menu.total_price, 0);

  const updateQuantity = (menu, newQuantity) => {
    const updatedMenus = order.menus.map((m) => {
      if (m.name === menu.name) {
        return {
          ...m,
          quantity: newQuantity,
          total_price: newQuantity * m.price,
        };
      } else {
        return m;
      }
    });
    setOrder((prev) => ({ ...prev, menus: updatedMenus }));
  };

  // const updateQuantity = (index, change) => {
  //   const updatedMenus = [...order.menus];
  //   const updatedMenu = { ...updatedMenus[index] };
  //   updatedMenu.quantity += change;
  //   updatedMenu.total_price = updatedMenu.price * updatedMenu.quantity;
  //   updatedMenus[index] = updatedMenu;
  //   const updatedCartData = { ...order, menus: updatedMenus };
  //   setOrder(updatedCartData);
  // };

  if (isLoading) {
    return <p>Loading...........</p>;
  }

  return (
    <>
      {order && (
        <>
          <h3 className="mb-3">Order Detail</h3>
          <DetailWrapper>
            <TokenLine>
              <div>Token Number</div>
              <Dash>-</Dash>
              <TokenSpan>{order.token_id}</TokenSpan>
            </TokenLine>
            {order.menus.length > 0 &&
              order.menus.map((menu, index) => (
                <OrderMenuItem
                  key={index}
                  menu={menu}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
            <DotLine />
            <PriceWrapper>
              <div>Subtotal</div>
              <div>{formatter.format(totalAmount)}</div>
            </PriceWrapper>
          </DetailWrapper>
        </>
      )}
    </>
  );
};

export default OrderDetail;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const DotLine = styled.div`
  border-bottom: 1px dashed #aaa;
`;

const Dash = styled.div`
  margin-top: 4px;
  margin-left: 20px;
`;

const DetailWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 80px;
`;

const TokenLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const TokenSpan = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 3px;
  margin-left: 20px;
`;
