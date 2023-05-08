import styled from "styled-components";
import TokenCard from "../components/TokenCard";
import { Link } from "react-router-dom";
import useInfinityScroll from "../hooks/useInfinityScroll";

const Main = () => {
  const { value, isLoading, lastPage } = useInfinityScroll("/tokens", "21");

  let content;

  content = (
    <TokenCardFlex>
      {value.map((number, index) => (
        <Link to={`/token/${number.number}/category`} key={index}>
          <TokenCard number={number.number} />
        </Link>
      ))}
    </TokenCardFlex>
  );

  return (
    <>
      <h3 className="mb-3">Tokens</h3>
      {content}
      {isLoading && <p>.........................Loading</p>}
      {lastPage && <LastPage>No Tokens yet</LastPage>}
    </>
  );
};

export default Main;

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
