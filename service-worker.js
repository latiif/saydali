self.addEventListener('install', (event) => {
  // Skip the waiting phase and activate immediately.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Claim all clients to ensure the new service worker is activated immediately.
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      // Optionally provide a fallback if the network fails.
      return new Response('Network unavailable', { status: 503 });
    })
  );
});

