import styled from "styled-components";
import { formatter } from "../../helper/helper";
import { useState } from "react";

const OrderMenuItem = ({ menu, onUpdateQuantity }) => {
  const [quantity, setQuantity] = useState(menu.quantity);

  const handlePlusClick = () => {
    setQuantity(quantity + 1);
    setTimeout(() => {
      onUpdateQuantity(menu, quantity + 1);
    }, 800);
  };

  const handleMinusClick = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setTimeout(() => {
        onUpdateQuantity(menu, quantity - 1);
      }, 800);
    }
  };

  return (
    <div>
      <MenuWrapper>
        <EachMenu>
          <MenuName>{menu.name}</MenuName>
          <div>({formatter.format(menu.price)})</div>
        </EachMenu>
        <EachMenu>{formatter.format(menu.total_price)}</EachMenu>
        <QtyItem>
          <QtyButton onClick={handleMinusClick}>-</QtyButton>
          {quantity}
          <QtyButton onClick={handlePlusClick}>+</QtyButton>
        </QtyItem>
      </MenuWrapper>
    </div>
  );
};

export default OrderMenuItem;

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
