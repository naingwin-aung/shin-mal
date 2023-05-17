import styled from "styled-components";
import MenuCard from "../components/Layouts/MenuCard";
import useInfinityScroll from "../hooks/useInfinityScroll";
import { useParams } from "react-router-dom";
import axiosClient from "../axios-client";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../helper/helper";
import NavBar from "../components/NavBar";

const Menu = () => {
  const { id, categoryId } = useParams();
  const { value, isLoading } = useInfinityScroll(
    `/categories/${categoryId}/menus`,
    "15"
  );

  const storeCart = async (menu) => {
    const payload = {
      token_id: id,
      menu_id: menu.id,
      quantity: 1,
    };

    const { data } = await axiosClient.post("/carts", payload);
    if (data.success) {
      notify();
    }
  };

  let content;

  content = (
    <>
      <NavBar text={value[0]?.category?.name} />
      <MenuCardFlex>
        {value.map((menu, index) => (
          <MenuCard
            key={index}
            value={menu}
            showPrice={true}
            onStoreCart={storeCart.bind(null, menu)}
          />
        ))}
      </MenuCardFlex>
    </>
  );

  return (
    <>
      {content}
      {isLoading && <p>.........................Loading</p>}
    </>
  );
};

export default Menu;

const MenuCardFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 17px;
  flex-wrap: wrap;
  margin-bottom: 80px;

  @media (max-width: 464px) {
    gap: 23px;
  }
`;
