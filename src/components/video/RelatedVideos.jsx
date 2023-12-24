import React from 'react';
import { useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { youtubeApiJotai } from '../../atom/api/atom';
import VideoCard from './VideoCard';

const Base = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export default function RelatedVideos() {
  const { keyword } = useParams();
  const youtubeApi = useAtomValue(youtubeApiJotai);

  const { data } = useQuery({
    queryKey: ['search', keyword],
    queryFn: () => youtubeApi.search(keyword),
  });

  return (
    <Base>{data?.length && data.map(video => <VideoCard video={video} type='related' />)}</Base>
  );
}
