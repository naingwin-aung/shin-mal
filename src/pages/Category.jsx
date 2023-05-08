import styled from "styled-components";
import MenuCard from "../components/Layouts/MenuCard";
import useInfinityScroll from "../hooks/useInfinityScroll";
import { Link, useParams, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
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
      <Wrapper>
        <div onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <h3 onClick={() => navigate(-1)} className="mb-4">
          Categories
        </h3>
      </Wrapper>
      {content}
      {isLoading && <p>.........................Loading</p>}
    </>
  );
};

export default Menu;

const Wrapper = styled.div`
  display: flex;

  span {
    font-size: 16px;
    margin-top: 7px;
    margin-right: 13px;
  }

  span,
  h3 {
    cursor: pointer;
  }
`;

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
