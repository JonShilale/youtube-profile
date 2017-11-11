// Count ensures that request is done before callback is executed
let count = 0;
const endPoint = 'https://www.googleapis.com/youtube/v3/playlistItems';

function get(array, item, callback) {
  const opts = {
    playlistId: item.playlistId,
    key: 'AIzaSyCF-Syt4L353GlBXU2O1skjrsf9zphuL64',
    part: 'snippet',
  };
  $.get(endPoint, opts, (data) => {
    // item.videos.push(data);
    for (let i = 0; i < data.items.length; i += 1) {
      item.videos.push({
        title: data.items[i].snippet.title,
        videoId: data.items[i].snippet.resourceId.videoId,
        desription: data.items[i].snippet.description,
        date: data.items[i].snippet.publishedAt,
      });
    }
    count += 1;
    if (count === array.length) {
      callback(array);
    }
  });
}

export default function getAllVideos(array, callback) {
  array.forEach(item => get(array, item, callback));
}
