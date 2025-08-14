/* eslint-disable global-require */

// polyfills and vendors

if (!window._babelPolyfill) {
  require('core-js/stable');
  require('regenerator-runtime/runtime');
}
