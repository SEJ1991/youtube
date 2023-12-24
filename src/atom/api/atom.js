import { atom } from 'jotai';
import YoutubeVideos from '../../api/videos';
import MockVideosClient from '../../api/mockVideosClient';
import YoutubeVideosClient from '../../api/videosClient';

// const client = new MockVideosClient();
const client = new YoutubeVideosClient();

export const youtubeApiJotai = atom(new YoutubeVideos(client));
