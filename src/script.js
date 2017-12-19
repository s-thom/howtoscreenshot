/* eslint-env browser */
/* eslint-disable
  prefer-arrow-callback,
  prefer-template,
  func-names,
 */

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function () {
      console.log('SW registration success');
    }).catch(function (err) {
      console.error('SW registration failed');
      console.error(err);
    });
}
