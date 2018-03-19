const CACHE_NAME = 'STORIES_CACHE-v2';

self.addEventListener('install', function() {
    // Guardar los archivos iniciales
    caches.open(CACHE_NAME).then(function(cache) {
        cache.addAll(['/index.html', '/dist/javascript/bundle.js', '/public/images/2.jpg']);
    })
});

self.addEventListener('activate', function(ev) {

    ev.waitUntil(
        caches.keys().then(function(cacheNames) {
            let promises = cacheNames.map(cacheName => {
                if (CACHE_NAME !== cacheName) return caches.delete(cacheName);
            });

            return Promise.all(promises);
        })
    );
});

self.addEventListener('fetch', function(ev) {
    ev.respondWith(
        caches.match(ev.request)
        .then(function(response) {

            return response || fetch(ev.request);
        })
    );
});
