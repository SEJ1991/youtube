import { useLocation, useParams } from 'react-router-dom';

/**
 * 비디오 디테일 페이지 로직 커스텀 훅
 */
export default function useVideoDetail() {
  const { id } = useParams();
  const {
    state: {
      snippet: { title, description, channelId },
    },
  } = useLocation();

  return {
    id,
    title,
    description,
    channelId,
  };
}
