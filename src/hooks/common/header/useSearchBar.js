import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/**
 * SearchBar 로직처리 커스텀 훅
 */
export default function useSearchBar() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [value, setValue] = useState('');

  const handleOnChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  const handleOnClick = () => {
    navigate(`videos/${value}`);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    handleOnClick();
  };

  useEffect(() => {
    console.log(keyword);
    setValue(keyword);
  }, [keyword]);

  return {
    value,
    handleOnSubmit,
    handleOnChange,
    handleOnClick,
  };
}
