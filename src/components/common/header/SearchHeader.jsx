import styled from '@emotion/styled';
import React from 'react';
import { BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 7rem;
  background-color: #1e1e1e;
  z-index: 10;
`;

const Content = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid #4d4e51;

  & > a {
    color: #fff;
    font-size: 2rem;
    line-height: 2;

    & > svg {
      margin-right: 0.8rem;
    }
  }
`;

export default function SearchHeader() {
  return (
    <Header>
      <Content>
        <Link to='/'>
          <BsYoutube size={40} color='#da050c' />
          YOUTUBE
        </Link>
        <SearchBar />
      </Content>
    </Header>
  );
}
