const CACHE_NAME = 'blog-cache-v1';
const urlsToCache = [
  '/images/author.png',
  '/images/sanjana_shenoy.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return Promise.allSettled(
          urlsToCache.map(url => 
            fetch(url).then(response => {
              if (!response.ok) {
                throw new Error(`Failed to fetch ${url}`);
              }
              return cache.put(url, response);
            })
          )
        );
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        
        return fetch(event.request).catch(error => {
          console.error('Fetch failed:', error);
        });
      })
  );
}); 