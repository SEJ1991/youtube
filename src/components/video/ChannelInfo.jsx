import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import React from 'react';
import { youtubeApiJotai } from '../../atom/api/atom.js';
import styled from '@emotion/styled';

const Base = styled.div`
  display: flex;
  column-gap: 0.8rem;
  align-items: center;
  width: auto;
  cursor: pointer;
`;

const ChannelImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
`;

const ChannelName = styled.span`
  font-size: 1.6rem;
  color: #fff;
  line-height: 1;
`;

export default function ChannelInfo({ id, channelTitle }) {
  const youtubeApi = useAtomValue(youtubeApiJotai);
  const {
    isLoading,
    error,
    data: url,
  } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => youtubeApi.channelImageURL(id),
  });

  return (
    <Base>
      <ChannelImg src={url} alt={channelTitle} />
      <ChannelName>{channelTitle}</ChannelName>
    </Base>
  );
}
