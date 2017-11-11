const videos = [];
const opts = {
  part: 'snippet',
  pageToken: null,
  channelId: 'UCdKuPY64fEpI4cdlBSyvEJw',
  key: 'AIzaSyCF-Syt4L353GlBXU2O1skjrsf9zphuL64',
};
const endPoint = 'https://www.googleapis.com/youtube/v3/playlists';

export default function getAllPlaylists(callback) {
  $.get(endPoint, opts, (data) => {
    const token = typeof data.nextPageToken !== 'undefined';
    data.items.forEach((item => videos.push({
      playlistId: item.id,
      playlistDate: item.snippet.publishedAt,
      playlistTitle: item.snippet.title,
      videos: [],
    })));
    opts.pageToken = token ? data.nextPageToken : null;
    return opts.pageToken ? getAllPlaylists(callback) : callback(videos);
  });
}
