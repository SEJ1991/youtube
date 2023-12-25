import React from 'react';
import styled from '@emotion/styled';

const Main = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: #1e1e1e;
  padding: 7.8rem 0 3rem 0;
`;

/**
 * 공통 레이아웃 컴포넌트
 * @property {React.ReactNode} children 리액트 노드
 */
export default function Layout({ children }) {
  return <Main>{children}</Main>;
}
