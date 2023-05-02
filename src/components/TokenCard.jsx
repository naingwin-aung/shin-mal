import styled from "styled-components";

const TokenCard = ({ number, onClick }) => {
  return (
    <TokenCardWrapper onClick={onClick}>
      <Number>{number}</Number>
    </TokenCardWrapper>
  );
};

export default TokenCard;

const TokenCardWrapper = styled.div`
  width: 110px;
  height: 110px;
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

const Number = styled.div`
  font-size: 24px;
`;
