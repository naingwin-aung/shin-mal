import styled from "styled-components";

function Button({ text, onClick, bgColor, textColor, align }) {
  return (
    <ButtonWrapper align={align}>
      <ButtonStyle onClick={onClick} bgColor={bgColor} textColor={textColor}>
        {text}
      </ButtonStyle>
    </ButtonWrapper>
  );
}

export default Button;

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
  font-size: 16px;
`;
