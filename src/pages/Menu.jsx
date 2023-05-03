import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MenuCard from "../components/Layouts/MenuCard";

const Menu = () => {
  const MENU = [
    {
      ကြက်သား: ["ကြက်သားမွကြော်", "ကြက်သားဟင်း"],
    },
    {
      oက်သား: ["oက်သားဟင်း"],
    },
  ];

  const { name } = useParams();
  const [newMenu, setMenu] = useState([]);

  useEffect(() => {
    let keys = Object.keys(MENU[0]);
    let foundKey = keys.find((key) => key === name);
    const obj = MENU.find((item) => item.hasOwnProperty(foundKey))[foundKey];
    setMenu(obj);
  }, []);

  return (
    <>
      <h3 className="mb-3">Menu</h3>
      <MenuCardFlex>
        {newMenu.length > 0 ? (
          newMenu.map((menu, index) => (
            <MenuCard key={index} valueName={menu} />
          ))
        ) : (
          <p>not found</p>
        )}
      </MenuCardFlex>
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
