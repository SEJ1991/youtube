export default class YoutubeVideos {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then(res => res.data.items.map(item => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet,contentDetails,statistics',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then(res => res.data.items);
  }

  async search(keyword) {
    const items = keyword ? await this.#searchByKeyword(keyword) : await this.#mostPopular();
    return items.filter(item => item.id);
  }

  async channelImageURL(id) {
    return this.apiClient
      .channel({
        params: {
          part: 'snippet',
          id,
        },
      })
      .then(item => item.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          rams: {
            part: 'snippet,contentDetails,statistics',
            maxResults: 25,
            type: 'video',
            id,
          },
        },
      })
      .then(res => res.data.items.map(item => ({ ...item, id: item.id.videoId })));
  }
}
