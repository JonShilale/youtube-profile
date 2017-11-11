
export default function buildPage(playlists) {
  // TODO put this function in a for loop that grabs the video ids based
  // on the playlist chosen and appends all videos to a div
  for (let i = 0; i < playlists.length; i += 1) {
    $('#playlistDiv').append(`<div id = 'playlist${i}'><p>${playlists[i].playlistTitle}</p></div>`);
    for (let j = 0; j < playlists[i].videos.length; j += 1) {
      $('#videoDiv').append(`<div id = 'video${j}' class = "card"><p class = 'result[${j}]'>${playlists[i].videos[j].title}</p></div>`);
    }
  }
}


// const player = new YT.Player('result0', {
//   height: '390',
//   width: '640',
//   videoId: playlists[i].videos[j].videoId,
// });