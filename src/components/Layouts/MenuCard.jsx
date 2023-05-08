import styled from "styled-components";
import { formatter } from "../../helper/helper";

const MenuCard = ({ value, onClick, showPrice = false }) => {
  return (
    <TokenCardWrapper onClick={onClick}>
      <MenuName>{value.name}</MenuName>
      {showPrice && <MenuPrice>{formatter.format(value.price)} Ks</MenuPrice>}
    </TokenCardWrapper>
  );
};

export default MenuCard;

const TokenCardWrapper = styled.div`
  min-width: 130px;
  height: 118px;
  border: 1.5px solid black;
  border-radius: 5px;
  display: flex;
  gap: 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 530px) {
    width: 130px;
  }

  @media (max-width: 464px) {
    width: 145px;
  }
`;

const MenuName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const MenuPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
