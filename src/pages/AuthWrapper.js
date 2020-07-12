import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from '../images/preloader.gif';
import styled from 'styled-components';
function AuthWrapper() {
  return <h2>authwrapper component</h2>;
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;
