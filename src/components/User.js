import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Followers from './Followers';
const User = () => {
  return <h2>search component</h2>;
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

export default User;
