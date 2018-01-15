var cacheName = 'GR';
var filesToCache = [
    '/',
    'index.html',
    '/img/main_background.jpeg',
    '/img/main_wohnung1.jpeg',
    '/img/main_wohnung2.jpeg',
    '/img/main_wohnung3.jpeg',
    '/img/main_wohnung4.jpeg',
    '/img/main_map.png',
    '/manifest.json',
    '/css/main.min.css',
    '/js/scripts.min.js'
];

self.addEventListener('install', function(e) {
    e.waitUntil(caches.open(cacheName)
        .then(function(cache) {
            return cache.addAll(filesToCache)
                .then(function() {
                    self.skipWaiting();
                });
        }));
});

self.addEventListener('activate', function(e) {
        e.waitUntil(caches.keys()
        .then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName)
                    return caches.delete(key);
            }));
        }));
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request)
        .then(function (response) {
            return response || fetch(event.request);
        })
    );
});