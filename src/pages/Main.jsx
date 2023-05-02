import styled from "styled-components";
import TokenCard from "../components/TokenCard";
import { useState } from "react";
import { Link } from "react-router-dom";
const Main = () => {
  const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [numbers, setNumbers] = useState(NUMBERS);
  return (
    <>
      <h3 className="mb-3">Tokens</h3>
      <TokenCardFlex>
        {numbers.map((number, index) => (
          <Link to={`/token/${number}/category`} key={index}>
            <TokenCard
              number={number}
              onClick={() => {
                console.log(number);
              }}
            />
          </Link>
        ))}
      </TokenCardFlex>
    </>
  );
};

export default Main;

const TokenCardFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 17px;
  flex-wrap: wrap;

  @media (max-width: 464px) {
    gap: 23px;
  }
`;
