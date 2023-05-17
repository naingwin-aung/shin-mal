import styled from "styled-components";
import PropTypes from "prop-types";

function Button({
  text,
  onClick,
  bgColor,
  textColor,
  align,
  fontSize,
  borderRadius,
}) {
  return (
    <ButtonWrapper align={align}>
      <ButtonStyle
        onClick={onClick}
        bgColor={bgColor}
        textColor={textColor}
        fontSize={fontSize}
        borderRadius={borderRadius}
      >
        {text}
      </ButtonStyle>
    </ButtonWrapper>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  align: PropTypes.string,
  fontSize: PropTypes.string,
  borderRadius: PropTypes.string,
};

const ButtonWrapper = styled.div`
  text-align: ${(props) => props.align || "left"};
`;

const ButtonStyle = styled.button`
  padding: 13px 25px;
  outline: none;
  background-color: ${(props) => props.bgColor || "black"};
  color: ${(props) => props.textColor || "white"};
  border-radius: 5px;
  cursor: pointer;
  border: 0;
  font-size: ${(props) => props.fontSize || "16px"};
`;
