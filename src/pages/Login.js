import { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";
import { GithubContext } from "../context/context";
const Login = () => {
  const { setGithubUser } = useContext(GithubContext);
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github user" />
        <h1>Github user</h1>
        <button className="btn">Login</button>
      </div>
      <button onClick={() => setGithubUser("john")}>Add Dion</button>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;


