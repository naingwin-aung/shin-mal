import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import TokenSharpIcon from "@mui/icons-material/TokenSharp";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const DefaultLayout = () => {
  const customToastStyle = {
    width: "70%", // change the width to 500px
    marginBottom: "45px", // change the margin bottom to 20px
    textAlign: "center",
  };

  const customToastContainerStyle = {
    bottom: "20px", // position the container at the bottom of the screen
    left: "16%",
    textAlign: "center", // center the toasts horizontally
  };

  const iconStyle = { color: "white", fontSize: "28px" };

  return (
    <div>
      <BottomNav>
        <Wrapper>
          <IconWrapper>
            <Link to="/">
              <TokenSharpIcon style={iconStyle} />
            </Link>
          </IconWrapper>
          <IconWrapper>
            <Link to="/orders">
              <AccountBalanceWalletIcon style={iconStyle} />
            </Link>
          </IconWrapper>
          <IconWrapper>
            <span className="material-symbols-outlined">home</span>
          </IconWrapper>
        </Wrapper>
      </BottomNav>
      <MainWrapper>
        <Outlet />
        <ToastContainer
          style={customToastContainerStyle}
          toastStyle={customToastStyle}
        />
      </MainWrapper>
    </div>
  );
};

export default DefaultLayout;

const MainWrapper = styled.div`
  margin: 20px;
`;

const BottomNav = styled.div`
  width: 100vw;
  height: 3.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 4px;
`;

const IconWrapper = styled.div`
  span {
    font-size: 30px;
    color: white;
  }
`;
