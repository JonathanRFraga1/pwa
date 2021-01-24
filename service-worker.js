const cacheName = 'cache-2';

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(
          [
            './offline.html',
            './_includes/css/styles.css',
            './_includes/fontAwesome/css/all.css',
            './_manifest/icon-512x512.png'
          ]
        );
      })
    );
  });

this.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('./offline.html');
            })
    )
});