import React from 'react';
import styled from '@emotion/styled';

import VideoCard from '../components/video/VideoCard';
import useVideos from '../hooks/videos/useVideos';
import Loading from '../components/common/Loading';

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

/**
 * 유튜브 비디오 목록 페이지 컴포넌트
 */
export default function Videos() {
  const { data, isLoading } = useVideos();

  if (isLoading) {
    return (
      <Base>
        <Loading />
      </Base>
    );
  }

  return (
    <Base>
      <List>
        {data?.map(video => (
          <li key={video.id}>
            <VideoCard video={video} />
          </li>
        ))}
      </List>
    </Base>
  );
}
