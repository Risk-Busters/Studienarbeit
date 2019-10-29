self.addEventListener('fetch', event => event.respondWith(
    caches.open('pwa-demo')
      .then(cache => cache.match(event.request))
      .then(response => response || fetch(event.request))
  )
);