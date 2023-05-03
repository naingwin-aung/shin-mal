import styled from "styled-components";
import TokenCard from "../components/TokenCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import Pagination from "../components/Pagination";
const Main = () => {
  const [numbers, setNumbers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 15;

  useEffect(() => {
    getTokens(currentPage);
  }, []);

  const getTokens = async (page) => {
    setIsLoading(true);
    const { data } = await axiosClient.get("/tokens", {
      params: {
        page: page,
        limit: limit,
      },
    });
    setTotal(data.total);
    setNumbers(data.data);
    setCurrentPage(page);
    setIsLoading(false);
  };

  let content;

  content = numbers.length > 0 && (
    <TokenCardFlex>
      {numbers.map((number, index) => (
        <Link to={`/token/${number.number}/category`} key={index}>
          <TokenCard number={number.number} />
        </Link>
      ))}
    </TokenCardFlex>
  );

  if (isLoading) {
    content = <p>Loading......</p>;
  }

  return (
    <>
      <h3 className="mb-3">Tokens</h3>
      {content}
      {!isLoading && (
        <Pagination
          total={total}
          limit={limit}
          onClick={(page) => getTokens(page)}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default Main;

const TokenCardFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 17px;
  flex-wrap: wrap;
  margin-bottom: 60px;

  @media (max-width: 464px) {
    gap: 23px;
  }
`;
