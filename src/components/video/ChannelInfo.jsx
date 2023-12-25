import React from 'react';
import styled from '@emotion/styled';

import useChannelInfo from '../../hooks/videos/useChannelInfo.js';

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

/**
 * 채널 정보 컴포넌트
 * @property {string} id channelId
 * @property {string} channelTitle channelTitle
 */
export default function ChannelInfo({ id, channelTitle }) {
  const { data: url } = useChannelInfo(id);

  return (
    <Base>
      <ChannelImg src={url} alt={channelTitle} />
      <ChannelName>{channelTitle}</ChannelName>
    </Base>
  );
}
