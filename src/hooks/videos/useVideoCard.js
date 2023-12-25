import { useNavigate } from 'react-router-dom';

import { viewCounter } from '../../libs/common';
import { formatAgo } from '../../libs/date';

/**
 * 비디오 카드 로직 커스텀 훅
 * @property {string} id videoId
 * @property {Snippet} snippet snippet
 * @property {statistics} statistics statistics
 */
export default function useVideoCard({ id, snippet, statistics }) {
  const navigate = useNavigate();
  const count = viewCounter(Number(statistics?.viewCount || 0));
  const date = formatAgo(snippet.publishedAt);

  const handleOnClick = () => {
    navigate(`/videos/watch/${id}`, {
      state: { statistics, snippet },
    });
  };

  return {
    count,
    date,
    handleOnClick,
  };
}
