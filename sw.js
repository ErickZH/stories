const CACHE_NAME = 'STORIES_CACHE-v1';

self.addEventListener('install', function() {
    // Guardar los archivos iniciales
    caches.open(CACHE_NAME).then(function(cache) {
        cache.addAll(['/index.html']);
    })
});
