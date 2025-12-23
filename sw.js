const CACHE_NAME = "enock-academy-cache-v1";
const urlsToCache = [
    "/index.html",
    "/dashboard.html",
    "/style.css",
    "/script.js",
    "/manifest.json",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png"
];

// Install event: cache files
self.addEventListener("install", (event) => {
    console.log("Service worker installed");
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Activate event: cleanup old caches
self.addEventListener("activate", (event) => {
    console.log("Service worker activated");
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) return caches.delete(key);
                })
            );
        })
    );
});

// Fetch event: serve cached content if available
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
