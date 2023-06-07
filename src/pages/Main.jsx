import styled from "styled-components";
import TokenCard from "../components/TokenCard";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import useLoadMore from "../hooks/useLoadMore";

const Main = () => {
  const { value, isLoading, loadMore, canLoadMore } = useLoadMore(
    "/tokens",
    "21"
  );

  let content;

  content = (
    <MainWrapper>
      <TokenCardFlex>
        {value.length > 0 &&
          value.map((number, index) => (
            <Link to={`/token/${number.number}/category`} key={index}>
              <TokenCard number={number.number} />
            </Link>
          ))}
      </TokenCardFlex>
      {value.length === 0 && <p>Loading..........</p>}
      {!isLoading && canLoadMore && value.length > 0 && (
        <Button text="Load More" onClick={loadMore} align="center" />
      )}
    </MainWrapper>
  );

  return (
    <>
      <h3 className="mb-3">Tokens</h3>
      {content}
      {isLoading && (
        <p style={{ marginBottom: "80px" }}>.........................Loading</p>
      )}
      {!isLoading && !canLoadMore && <LastPage>No Tokens yet</LastPage>}
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

const MainWrapper = styled.div`
  margin-bottom: 80px;
`;
