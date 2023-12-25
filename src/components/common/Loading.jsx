import React from 'react';
import styled from '@emotion/styled';

const LoadingText = styled.p`
  color: white;
  font-size: 1.5rem;
`;
/**
 * 로딩 컴포넌트
 */
export default function Loading() {
  return <LoadingText>Loading...</LoadingText>;
}
