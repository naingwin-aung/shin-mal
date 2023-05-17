import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const NavBar = ({ text }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div onClick={() => navigate(-1)}>
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </div>
      <h3 onClick={() => navigate(-1)} className="mb-4">
        {text}
      </h3>
    </Wrapper>
  );
};

export default NavBar;

NavBar.propTypes = {
  text: PropTypes.string,
};

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
