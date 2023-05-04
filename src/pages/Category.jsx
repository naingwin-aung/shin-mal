import styled from "styled-components";
import MenuCard from "../components/Layouts/MenuCard";
import useInfinityScroll from "../hooks/useInfinityScroll";

const Menu = () => {
  const { value, isLoading } = useInfinityScroll("/categories", 15);

  let content;

  content = (
    <CategoryCardFlex>
      {value.map((category, index) => (
        <MenuCard valueName={category.name} key={index} />
      ))}
    </CategoryCardFlex>
  );

  return (
    <>
      <h3 className="mb-3">Categories</h3>
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
