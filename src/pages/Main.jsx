import styled from "styled-components";
import TokenCard from "../components/TokenCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

const Main = () => {
  const [numbers, setNumbers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(false);

  useEffect(() => {
    getTokens();
  }, [currentPage]);

  const handlescroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setIsLoading(true);
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);

    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  const getTokens = async () => {
    if (!lastPage) {
      const { data } = await axiosClient.get("/tokens", {
        params: {
          page: currentPage,
          limit: 21,
        },
      });
      setNumbers((prev) => [...prev, ...data.data]);
      setLastPage(data.data.length === 0);
    }
    setIsLoading(false);
  };

  let content;

  content = (
    <TokenCardFlex>
      {numbers.map((number, index) => (
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
    </>
  );
};

export default Main;

const TokenCardFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 60px;

  @media (max-width: 464px) {
    gap: 23px;
  }
`;
