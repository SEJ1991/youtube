import React from 'react';
import styled from '@emotion/styled';

import RelatedVideos from '../components/video/RelatedVideos';
import ChannelInfo from '../components/video/ChannelInfo';
import useVideoDetail from '../hooks/videos/useVideoDetail';

const Base = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  height: auto;
`;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 70% 29%;
  column-gap: 1%;
  width: 95%;
  height: auto;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
  }
`;

const Detail = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  height: auto;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 1.8rem;
  margin: 0.4rem 0 0.8rem;
`;

const Ifrmae = styled.iframe`
  width: 100%;
  height: 64rem;
  border-radius: 0.5rem;
`;

const Description = styled.pre`
  height: auto;
  font-size: 1.5rem;
  color: #fff;
  white-space: pre-wrap;
`;

/**
 * 비디오 디테일 페이지 컴포넌트
 */
export default function VideoDetail() {
  const { id, title, description, channelId } = useVideoDetail();
  return (
    <Base>
      <Wrapper>
        <Detail>
          <Ifrmae
            id='player'
            type='text/html'
            src={`http://www.youtube.com/embed/${id}`}
            frameborder='0'
          ></Ifrmae>
          <Title>{title}</Title>
          <ChannelInfo id={channelId} channelTitle='FOX Weather' />
          <Description>{description}</Description>
        </Detail>
        <RelatedVideos />
      </Wrapper>
    </Base>
  );
}
