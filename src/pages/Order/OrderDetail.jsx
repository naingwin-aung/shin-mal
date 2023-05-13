import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../axios-client";
import styled from "styled-components";
import { formatter } from "../../helper/helper";

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

  const updateQuantity = (index, change) => {
    const updatedMenus = [...order.menus];
    const updatedMenu = { ...updatedMenus[index] };
    updatedMenu.quantity += change;
    updatedMenu.total_price = updatedMenu.price * updatedMenu.quantity;
    updatedMenus[index] = updatedMenu;
    const updatedCartData = { ...order, menus: updatedMenus };
    setOrder(updatedCartData);
  };

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
                <MenuWrapper key={index}>
                  <EachMenu>
                    <MenuName>{menu.name}</MenuName>
                    <div>({formatter.format(menu.price)})</div>
                  </EachMenu>
                  <EachMenu>{formatter.format(menu.total_price)}</EachMenu>
                  <QtyItem>
                    <QtyButton
                      onClick={() => {
                        updateQuantity(index, -1);
                      }}
                    >
                      -
                    </QtyButton>
                    {menu.quantity}
                    <QtyButton
                      onClick={() => {
                        updateQuantity(index, 1);
                      }}
                    >
                      +
                    </QtyButton>
                  </QtyItem>
                </MenuWrapper>
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

const QtyButton = styled.button`
  width: 30px;
  height: 31px;
  border: 1px solid #ddd;
  outline: none;
  margin: 10px;
  font-size: 20px;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const DotLine = styled.div`
  border-bottom: 1px dashed #aaa;
`;

const MenuName = styled.div`
  margin-bottom: 8px;
`;

const EachMenu = styled.div`
  font-size: 15px;
  word-wrap: break-word;
  max-width: 28%;
`;

const QtyItem = styled.div`
  min-width: 28%;
  max-width: 40%;
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
