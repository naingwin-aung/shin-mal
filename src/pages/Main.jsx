import styled from "styled-components";
import TokenCard from "../components/TokenCard";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
// import Pagination from "../components/Pagination";

const Main = () => {
  const [numbers, setNumbers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [canLoadMore, setCanLoadMore] = useState(false);
  const limit = 15;
  const containerRef = useRef(null);

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
    setNumbers((prevNumbers) => [...prevNumbers, ...data.data]);
    setCanLoadMore(data.can_load_more);
    setCurrentPage(page);
    setIsLoading(false);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.lastElementChild.scrollIntoView();
    }
  }, [numbers]);

  let content;

  content = numbers.length > 0 && (
    <TokenCardFlex ref={containerRef}>
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
      {canLoadMore && (
        <button
          style={{ marginBottom: "80px" }}
          onClick={() => {
            getTokens(currentPage + 1);
          }}
        >
          Load More
        </button>
      )}
      {/* {!isLoading && (
        <Pagination
          total={total}
          limit={limit}
          onClick={(page) => getTokens(page)}
          currentPage={currentPage}
        />
      )} */}
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
