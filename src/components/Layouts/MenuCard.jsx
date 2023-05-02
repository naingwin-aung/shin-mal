import styled from "styled-components";

const MenuCard = ({ valueName, onClick }) => {
  return (
    <TokenCardWrapper onClick={onClick}>
      <MenuName>{valueName}</MenuName>
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
