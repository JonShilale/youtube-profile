import 'babel-polyfill';
import jQuery from 'jquery';
import Popper from 'popper.js';
// import buildPage from './lib/buildPage';
import getAllPlaylists from './lib/getAllPlaylists';
import getAllVideos from './lib/getAllVideos';
import buildPage from './lib/buildPage';

window.$ = jQuery;
window.jQuery = jQuery;
window.Popper = Popper;

require('bootstrap');

const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// window.onYouTubeIframeAPIReady = () => {
//   getAllPlaylists((data) => {
//     getAllVideos(data, (playlists) => {
//       buildPage(playlists);
//     });
//   });
// };
