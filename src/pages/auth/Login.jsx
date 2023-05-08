import styled from "styled-components";
import Button from "../../components/Button";

function Login() {
  return (
    <LoginWrapper>
      <form>
        <Title>Login to your account</Title>
        <FormControl>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="user@gmail.com" />
        </FormControl>

        <FormControl>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="user12345" />
        </FormControl>

        <Button text="Login" align="right" />
      </form>
    </LoginWrapper>
  );
}

export default Login;

const Title = styled.div`
  margin-bottom: 30px;
  font-weight: bold;
  text-align: center;
`;

const LoginWrapper = styled.div`
  min-width: 75%;
  background-color: #ddd;
  padding: 30px;
  border-radius: 5px;

  @media (min-width: 640px) {
    min-width: 50%;
  }
`;

const FormControl = styled.div`
  margin-bottom: 28px;

  label,
  input {
    display: block;
    border-radius: 5px;
    border: 0;
  }

  label {
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 10px;
  }
`;
