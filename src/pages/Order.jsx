import styled from "styled-components";
import TokenCard from "../components/TokenCard";
import { Link } from "react-router-dom";
import useInfinityScroll from "../hooks/useInfinityScroll";

const Order = () => {
  const { value, isLoading, lastPage } = useInfinityScroll(
    "/carts-tokens",
    "21"
  );

  let content;

  content = (
    <TokenCardFlex>
      {value.map((number, index) => (
        <Link to={``} key={index}>
          <TokenCard number={number.token.number} />
        </Link>
      ))}
    </TokenCardFlex>
  );

  return (
    <>
      <h3 className="mb-3">Orders</h3>
      {content}
      {isLoading && <p>.........................Loading</p>}
      {!isLoading && lastPage && <LastPage>No Tokens yet</LastPage>}
    </>
  );
};

export default Order;

const TokenCardFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 464px) {
    gap: 23px;
  }
`;

const LastPage = styled.div`
  margin-bottom: 80px;
  text-align: center;
  font-weight: bold;
  color: red;
`;
