// babel polyfill for es6+ features
import 'babel-polyfill';

// JavaScript dependencies for Bootstrap 4.x
import jQuery from 'jquery';
import Popper from 'popper.js';

// project-specific module imports
import injectHtml from './lib/module-example'; // sample module import

// export jQuery and Popper to the global window object
window.$ = jQuery;
window.jQuery = jQuery;
window.Popper = Popper;

// import Bootstrap jQuery plugins to the jQuery object
require('bootstrap');

// add all project-specific modules/code below...
injectHtml('module-test', 'es6 Module Test'); // sample usage of imported module
