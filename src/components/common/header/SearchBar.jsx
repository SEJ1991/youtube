import React from 'react';
import { BsSearch } from 'react-icons/bs';
import styled from '@emotion/styled';

import useSearchBar from '../../../hooks/common/header/useSearchBar';

const Base = styled.form`
  width: auto;
  height: 3.5rem;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 35rem;
  height: 100%;
  background-color: #19191b;
  color: #fff;
  font-size: 1.4rem;
  padding: 0 0.8rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border: 0.1rem solid #4d4e51;

  @media (max-width: 992px) {
    width: 25rem;
  }

  @media (max-width: 576px) {
    width: 15rem;
  }
`;

const SearchWrapper = styled.button`
  width: 3.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4d4e51;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  cursor: pointer;
`;

/**
 * 공통 헤더 컴포넌트에 종속된 검색바 컴포넌트
 */
export default function SearchBar() {
  const { value, handleOnSubmit, handleOnChange, handleOnClick } = useSearchBar();

  return (
    <Base onSubmit={handleOnSubmit}>
      <Input type='text' placeholder='search...' onChange={handleOnChange} value={value} />
      <SearchWrapper>
        <BsSearch size={13} color='#FFF' onClick={handleOnClick} />
      </SearchWrapper>
    </Base>
  );
}
