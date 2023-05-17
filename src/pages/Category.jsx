import styled from "styled-components";
import MenuCard from "../components/Layouts/MenuCard";
import useInfinityScroll from "../hooks/useInfinityScroll";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const Menu = () => {
  const { value, isLoading } = useInfinityScroll("/categories", 15);

  const { id } = useParams();

  let content;

  content = (
    <CategoryCardFlex>
      {value.map((category, index) => (
        <Link key={index} to={`/token/${id}/category/${category.id}/menu`}>
          <MenuCard value={category} />
        </Link>
      ))}
    </CategoryCardFlex>
  );

  return (
    <>
      <NavBar text="Categories" />
      {content}
      {isLoading && <p>.........................Loading</p>}
    </>
  );
};

export default Menu;

const CategoryCardFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 17px;
  flex-wrap: wrap;
  margin-bottom: 80px;

  @media (max-width: 464px) {
    gap: 23px;
  }
`;
