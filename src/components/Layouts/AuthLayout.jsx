import { Outlet } from "react-router-dom";
import styled from "styled-components";

function AuthLayout() {
  return (
    <AuthWrapper>
      <Outlet></Outlet>
    </AuthWrapper>
  );
}

export default AuthLayout;

const AuthWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
