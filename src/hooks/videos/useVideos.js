import { useParams } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';

import { youtubeApiJotai } from '../../atom/api/atom';

/**
 * 비디오 목록 화면 로직 커스텀 훅
 */
export default function useVideos() {
  const youtubeApi = useAtomValue(youtubeApiJotai);
  const { keyword } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => youtubeApi.search(keyword),
  });

  return { data, isLoading, isError };
}
