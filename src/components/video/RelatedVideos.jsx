import React from 'react';
import styled from '@emotion/styled';

import VideoCard from './VideoCard';
import useRelatedVideos from '../../hooks/videos/useRelatedVideos';
import Loading from '../common/Loading';

const Base = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

/**
 * 연관된 비디오 목록 컴포넌트
 */
export default function RelatedVideos() {
  const { data, isLoading } = useRelatedVideos();

  if (isLoading) {
    return (
      <Base>
        <Loading />
      </Base>
    );
  }

  return (
    <Base>
      {data?.map(video => (
        <VideoCard key={video.id} video={video} type='related' />
      ))}
    </Base>
  );
}
