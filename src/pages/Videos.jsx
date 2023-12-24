import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import VideoCard from '../components/video/VideoCard';
import { youtubeApiJotai } from '../atom/api/atom';

const Base = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: auto;
`;

const List = styled.ul`
  width: 95%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export default function Videos() {
  const youtubeApi = useAtomValue(youtubeApiJotai);

  const { keyword } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => youtubeApi.search(keyword),
  });

  return (
    <Base>
      <List>
        {data?.length &&
          data.map(video => (
            <li key={video.id}>
              <VideoCard video={video} />
            </li>
          ))}
      </List>
    </Base>
  );
}
