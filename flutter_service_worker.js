'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f6427c3016b6c1125b0e5005b54dc900",
"assets/AssetManifest.bin.json": "24a3e2482cf8521efb9255e3a8b05a24",
"assets/AssetManifest.json": "db3b13f944d2e8ae54a1a1f84ed5ffac",
"assets/assets/audios/F4J5TCX-ball-hits-ball.mp3": "ddf6612058a6f180f90a9cda0b2661e1",
"assets/assets/audios/game_ringtone.mp3": "d8320cb92255b9318e4a65ef8ca59bf6",
"assets/assets/audios/hit-ball-60701.mp3": "4a33539bf8697c1a5b759bdcf3a2b3a5",
"assets/assets/audios/mixkit-ball-bouncing-in-the-ground-2077.wav": "d50a0c411c61ebc6439acb04183aee29",
"assets/assets/audios/TunePocket-3-2-1-Go-Countdown-Male-2-Preview.mp3": "66bff042ad8219ea682ac0d3379085a4",
"assets/assets/icons/gmail_icon.svg": "c3d303f6fe059c192ed3f6404df0d553",
"assets/assets/icons/gmail_icon_round.svg": "2455473071857881ae74a5c26dcca063",
"assets/assets/icons/icon.png": "5842f6a10f3216ff62abd985b735a179",
"assets/assets/icons/icon_bg.jpg": "f9549b67683f9c6d9648dd555e6f2e68",
"assets/assets/images/batball.jpeg": "6e7934afb966c13f4b1a5d0f57f8c1fa",
"assets/assets/images/chess.jpeg": "7ce08d04fcb62fbdd6d665e94a68d1c8",
"assets/assets/images/die.png": "3b6757c239d9edb22b6ebcd06e8f8148",
"assets/assets/images/draught.jpeg": "b87fb54bbe9770482feb5a764274f441",
"assets/assets/images/ludo.jpeg": "612f65b9f84220077ba9570e392b8eca",
"assets/assets/images/whot.jpeg": "b61187858eedfec7cb242333d1c789d3",
"assets/assets/images/xando.jpeg": "07fe4ea57e924e7f872baa6fc53ac9df",
"assets/assets/svgs/chess_bishop_icon.svg": "b4afaa107c2d23998b0d43af9d88ae2e",
"assets/assets/svgs/chess_horse_knight_icon.svg": "896197c68e2b148f37c8abea8b7e4034",
"assets/assets/svgs/chess_king_icon.svg": "371f941c5153c3bcb94ec22043b614d0",
"assets/assets/svgs/chess_pawn_icon.svg": "684287f5d13ce6607db47ad4559b12d0",
"assets/assets/svgs/chess_queen_icon.svg": "c0e94b09e2f525b5f529b475f3d765ad",
"assets/assets/svgs/chess_rook_icon.svg": "a36488649dadadcd3a3a1ac8ea7b1dae",
"assets/FontManifest.json": "804707ad6eb45368673f1e39bf241e41",
"assets/fonts/MaterialIcons-Regular.otf": "aaa3c77adc4ef78b87c6b65500dc33ee",
"assets/google_fonts/Roboto-Regular.ttf": "afe8eacfc0903cc0612dc696881f0480",
"assets/NOTICES": "9a46ab7ab3643903d48b9c36ec4a33ff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "fa374c5bcd15e9b468c501d3ffdefcc8",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "4a4919c19304a04341dc515a096a0b0b",
"icons/Icon-512.png": "036bebd473d6ee3e1e22406c6cd50b91",
"icons/Icon-maskable-192.png": "4a4919c19304a04341dc515a096a0b0b",
"icons/Icon-maskable-512.png": "036bebd473d6ee3e1e22406c6cd50b91",
"index.html": "2a37ebdc8a639043db79374e4396611c",
"/": "2a37ebdc8a639043db79374e4396611c",
"main.dart.js": "43544c5d87a9a29ab0433a722e14325a",
"manifest.json": "ff18d444a34ec5c4d43f38ee8a89497f",
"version.json": "d7999b91975022415d886ec9ef2ff045"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
