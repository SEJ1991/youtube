import styled from '@emotion/styled';
import React from 'react';

const Main = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: #1e1e1e;
  padding: 7.8rem 0 3rem 0;
`;

export default function Layout({ children }) {
  return <Main>{children}</Main>;
}
