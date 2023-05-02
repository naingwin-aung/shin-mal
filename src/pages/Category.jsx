import { useState } from "react";
import styled from "styled-components";
import MenuCard from "../components/Layouts/MenuCard";
import { Link, useParams } from "react-router-dom";

const Menu = () => {
  const CATEGORIES = [
    "ကြက်သား",
    "oက်သား",
    "အမဲသား",
    "ဆိတ်သား",
    "ငါး",
    "ပုဇွန်",
  ];

  const [categories, setCategories] = useState(CATEGORIES);
  const { id } = useParams();

  return (
    <>
      <h3 className="mb-3">Categories</h3>
      <CategoryCardFlex>
        {categories.map((cat, index) => (
          <Link key={index} to={`/token/${id}/category/${cat}/menu`}>
            <MenuCard valueName={cat} />
          </Link>
        ))}
      </CategoryCardFlex>
    </>
  );
};

export default Menu;

const CategoryCardFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 17px;
  flex-wrap: wrap;

  @media (max-width: 464px) {
    gap: 23px;
  }
`;
