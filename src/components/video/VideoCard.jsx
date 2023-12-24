import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { viewCounter } from '../../libs/common';
import { formatAgo } from '../../libs/date';

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

export default function VideoCard({ video: { id, snippet, statistics }, type }) {
  const navigate = useNavigate();

  const { thumbnails, title, channelTitle, publishedAt } = snippet;

  const count = viewCounter(Number(statistics?.viewCount || 0));
  const date = formatAgo(publishedAt);

  const onClick = () => {
    navigate(`/videos/watch/${id}`, {
      state: { statistics, snippet },
    });
  };

  return (
    <Base onClick={onClick} type={type}>
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
