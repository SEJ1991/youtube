import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';

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

export default function SearchBar() {
  const navigate = useNavigate();
  const { keyword } = useParams();

  const [value, setValue] = useState('');

  const onChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  const searching = () => {
    navigate(`videos/${value}`);
  };

  const onSubmit = e => {
    e.preventDefault();
    searching();
  };

  useEffect(() => {
    setValue(keyword || '');
  }, [keyword]);
  return (
    <Base onSubmit={onSubmit}>
      <Input type='text' placeholder='search...' onChange={onChange} value={value} />
      <SearchWrapper>
        <BsSearch size={13} color='#FFF' onClick={searching} />
      </SearchWrapper>
    </Base>
  );
}
