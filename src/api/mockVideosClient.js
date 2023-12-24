import axios from 'axios';

export default class MockVideosClient {
  async search(params) {
    const isRelated = params.relatedToVideoId;
    return axios.get(`/videos/${isRelated ? 'related' : 'search'}.json`);
  }

  async videos() {
    return axios.get('/videos/popular.json');
  }

  async channel() {
    return axios.get('/videos/channel.json');
  }
}
