/* eslint-env browser */
/* eslint-disable no-restricted-globals */

// Service worker to end all service workers.
// Maybe one day I'll add offline again, but ultimately I find it to be too much trouble.
// Often the same people come back to the site, and since they get the cached version it may
// be some time before they get actual current content.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  // Optional: Get a list of all the current open windows/tabs under
  // our service worker's control, and force them to reload.
  // This can "unbreak" any open windows/tabs as soon as the new
  // service worker activates, rather than users having to manually reload.
  self.clients.matchAll({
    type: 'window'
  }).then(windowClients => {
    windowClients.forEach((windowClient) => {
      windowClient.navigate(windowClient.url);
    });
  });
});
