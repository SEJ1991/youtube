import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';

import { youtubeApiJotai } from '../../atom/api/atom';

/**
 * 채널 정보 로직 커스텀 훅
 * @param {string} id 채널 아이디
 */
export default function useChannelInfo(id) {
  const youtubeApi = useAtomValue(youtubeApiJotai);
  const { isLoading, isError, data } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => youtubeApi.channelImageURL(id),
  });

  return {
    data,
    isLoading,
    isError,
  };
}
