/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "scrsht-hlp"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android.html",
    "revision": "6d1dca272b4037a0fd7ba20a01ccff12"
  },
  {
    "url": "icon/192.png",
    "revision": "9f488eb0d30aa30f1a1c2a76c5cebb26"
  },
  {
    "url": "icon/48.png",
    "revision": "a4c49d6dd257b8c062238bc47414b37c"
  },
  {
    "url": "icon/512-manifest.png",
    "revision": "d46561cdc21b732f60ca30b460563ad9"
  },
  {
    "url": "icon/512.png",
    "revision": "d266623daba4fe472e21ad2abfcac8e0"
  },
  {
    "url": "icon/96.png",
    "revision": "16ff92fc09457ec8d8a69d450f9df598"
  },
  {
    "url": "img/banner-android.png",
    "revision": "aecd93c5b1a8af3502b95dbcd9e14b18"
  },
  {
    "url": "img/banner-ios.png",
    "revision": "47379d4e1808647499c766896c4768f4"
  },
  {
    "url": "img/banner-linux.png",
    "revision": "21fd2eb8d7045a4c13bb9db030afa2bd"
  },
  {
    "url": "img/banner-mac.png",
    "revision": "37aa588ca70bb413adb288575f0f22b6"
  },
  {
    "url": "img/banner-playstation.png",
    "revision": "facb57827a08bcfc2b2ead9e37d8b2ce"
  },
  {
    "url": "img/banner-steam.png",
    "revision": "9f4d854f61d7f29f0202defb187c983a"
  },
  {
    "url": "img/banner-win.png",
    "revision": "1208a4561c9978994ba372d28e7af153"
  },
  {
    "url": "img/banner-xbox.png",
    "revision": "1acc5796f41f63a7faaad2b48ff4970f"
  },
  {
    "url": "img/banner.png",
    "revision": "8129437665a932450959ce34eab53223"
  },
  {
    "url": "img/banner2.png",
    "revision": "1ce49cbd9599aff6e7a3e4758f5d0f4d"
  },
  {
    "url": "index.html",
    "revision": "a953fc1be0b58692822e6948a4499794"
  },
  {
    "url": "ios.html",
    "revision": "0521bc616bcc53de6733fd0c6a3c1e5a"
  },
  {
    "url": "linux.html",
    "revision": "9d62ef2bbdeea272f906338a3794e126"
  },
  {
    "url": "mac.html",
    "revision": "719b4d2dc11d8f9e2461fb3208df38fd"
  },
  {
    "url": "manifest.json",
    "revision": "8329eca47f427fb9ec6f27de7adb06b0"
  },
  {
    "url": "playstation.html",
    "revision": "37bc00a85edf72541fd4435fead07602"
  },
  {
    "url": "script.js",
    "revision": "914c08c2818abb2ebcfb834cbe3ca1fa"
  },
  {
    "url": "steam.html",
    "revision": "041ff3cac331300ce6e7ef478f2405b7"
  },
  {
    "url": "styles.css",
    "revision": "b7f1195b1206d6e33aac1bd900d66d04"
  },
  {
    "url": "windows.html",
    "revision": "4a5e5aa351628b1240f799e571c5f683"
  },
  {
    "url": "xbox.html",
    "revision": "4b2151464af33e3f45488a17cbc50682"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  "directoryIndex": "index.html"
});

workbox.googleAnalytics.initialize({});
