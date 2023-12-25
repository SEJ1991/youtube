import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import useVideoCard from '../../hooks/videos/useVideoCard';

const Base = styled.div`
  ${props =>
    props.type === 'related'
      ? css`
          display: flex;
          column-gap: 0.8rem;
        `
      : css`
          display: grid;
          height: 100%;
          row-gap: 0.8rem;
        `}

  border-radius: 0.5rem;
  box-shadow: 0rem 0rem 0.3rem 0.2rem #141314;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translate(0.3rem, -0.3rem);
  }
`;

const Img = styled.img`
  ${props =>
    props.type === 'related'
      ? css`
          width: 45%;
          border-top-left-radius: 0.5rem;
          border-bottom-left-radius: 0.5rem;
        `
      : css`
          width: 100%;
          border-top-right-radius: 0.5rem;
          border-top-left-radius: 0.5rem;
        `}
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  row-gap: 0.8rem;
  width: 100%;
  color: #fff;
  padding: 0 0.4rem 0.4rem 0.4rem;
`;

const Text = styled.p`
  font-size: 1.4rem;
  opacity: 0.7;

  ${props =>
    props.needReduce &&
    css`
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${props.lineClamp};
      word-break: break-all;
      opacity: 1;
    `}
`;

/**
 * 비디오 카드 컴포넌트
 * @property {Video} video 비디오 정보
 * @property {string?} type related or undefined
 */
export default function VideoCard({ video: { id, snippet, statistics }, type }) {
  const { thumbnails, title, channelTitle } = snippet;
  const { count, date, handleOnClick } = useVideoCard({ id, snippet, statistics });

  return (
    <Base onClick={handleOnClick} type={type}>
      <Img src={thumbnails.medium.url} alt={title} type={type} />
      <Body>
        <Text needReduce lineClamp={2}>
          {title}
        </Text>
        <div>
          <Text>{channelTitle}</Text>
          <Text needReduce lineClamp={1}>{`${count} views ∙ ${date}`}</Text>
        </div>
      </Body>
    </Base>
  );
}
