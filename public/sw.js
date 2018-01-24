/* eslint-env serviceworker, browser */
/* eslint-disable no-restricted-globals */
const CACHE = 'v3';
const LOGTAG = `SW:${CACHE}:`;
const TIMEOUT = 1000;
const CACHE_FIRST = false;

// Get resource from network
function fromNetwork(request) {
  // Resolve in case of success
  // Reject in case of timeout
  return new Promise((resolve, reject) => {
    // Set up timeout rejection
    const timeoutId = setTimeout(reject, TIMEOUT);

    fetch(request)
      .then((response) => {
        clearTimeout(timeoutId);

        // Add to cache
        return caches
          .open(`${CACHE}-active`)
          .then((cache) => {
            cache.put(request, response.clone());
          })
          // Just log cache errors, it'll get requested next time
          .then(() => response, () => response);
      })
      .then(resolve, reject);
  });
}

// Get resource from cache
function fromCache(request) {
  return caches
    .open(`${CACHE}-active`)
    .then(cache => cache
      .match(request)
      .then(matching => matching || Promise.reject(new Error('no-match'))));
}

// Cache main page + script + styles on install
self.addEventListener('install', (event) => {
  console.log(`${LOGTAG} INSTALLING`);

  // Install necessary resources
  const installation = caches
    .open(`${CACHE}-base`)
    .then(cache =>
      cache.addAll([
        '/index.html',
        '/styles.css',
        '/script.js',
      ]));

  event.waitUntil(installation);
});

// Fetch from network, use cache as fallback
self.addEventListener('fetch', (event) => {
  console.log(`${LOGTAG} FETCHING ${event.request.url} (${CACHE_FIRST ? 'cache' : 'net'} first)`);

  let prom;
  if (CACHE_FIRST) {
    prom = fromCache(event.request)
      .catch(() => fromNetwork(event.request));
  } else {
    prom = fromNetwork(event.request)
      .catch(() => fromCache(event.request));
  }

  event.respondWith(prom);
});

// Clean up old caches once this version is working
self.addEventListener('activate', (event) => {
  console.log(`${LOGTAG} ACTIVATED`);
  // List all caches
  event.waitUntil(caches
    .keys()
    // Filter to caches that don't have the same version number
    .then(keys => keys.filter(name => name.startsWith(`${CACHE}-`)))
    .then(toDelete => Promise.all(toDelete
      .map(cache => caches.delete(cache))))
    .then(() => self.clients.claim()));
});
