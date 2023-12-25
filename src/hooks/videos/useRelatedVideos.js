import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';

import { youtubeApiJotai } from '../../atom/api/atom';

/**
 * 연관된 비디오 목록 로직 커스텀 훅
 */
export default function useRelatedVideos() {
  const { keyword } = useParams();
  const youtubeApi = useAtomValue(youtubeApiJotai);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['search', keyword],
    queryFn: () => youtubeApi.search(keyword),
  });

  return {
    data,
    isLoading,
    isError,
  };
}
