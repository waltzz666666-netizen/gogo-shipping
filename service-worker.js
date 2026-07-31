const CACHE_NAME =
  "gogo-shipping-v3";


const APP_SHELL_FILES = [
  "./",
  "./index.html?v=pwa3",
  "./style.css?v=pwa3",
  "./app.js?v=pwa3",
  "./manifest.json",

  "./APP/assets/ui/출고자설정화면.png",
  "./APP/assets/ui/출고처리화면.png",
  "./APP/assets/ui/출고완료버튼.png",
  "./APP/assets/ui/고고출고어플아이콘.png",

  "./APP/assets/characters/brachiosaurus.png",
  "./APP/assets/characters/dolphin.png",
  "./APP/assets/characters/jellyfish.png",
  "./APP/assets/characters/chick.png",
  "./APP/assets/characters/tiger.png",
  "./APP/assets/characters/bear.png",
  "./APP/assets/characters/monkey.png",
  "./APP/assets/characters/crocodile.png",
  "./APP/assets/characters/panda.png",
  "./APP/assets/characters/hamster.png",

  "./APP/assets/accessories/head/hat.png",
  "./APP/assets/accessories/head/crown.png",
  "./APP/assets/accessories/head/headset.png",

  "./APP/assets/accessories/face/sunglasses.png",
  "./APP/assets/accessories/face/heart-glasses.png",
  "./APP/assets/accessories/face/spiral-glasses.png",

  "./APP/assets/accessories/effect/sparkle.png",
  "./APP/assets/accessories/effect/clover.png",
  "./APP/assets/accessories/effect/heart.png"
];


/*
 * 서비스 워커 설치 시
 * 앱 기본 파일을 캐시에 저장합니다.
 */
self.addEventListener(
  "install",
  function (
    event
  ) {
    event.waitUntil(
      caches
        .open(
          CACHE_NAME
        )
        .then(
          function (
            cache
          ) {
            return cache.addAll(
              APP_SHELL_FILES
            );
          }
        )
    );

    self.skipWaiting();
  }
);


/*
 * 새 서비스 워커가 활성화되면
 * 이전 버전 캐시를 삭제합니다.
 */
self.addEventListener(
  "activate",
  function (
    event
  ) {
    event.waitUntil(
      caches
        .keys()
        .then(
          function (
            cacheNames
          ) {
            return Promise.all(
              cacheNames.map(
                function (
                  cacheName
                ) {
                  if (
                    cacheName !==
                    CACHE_NAME
                  ) {
                    return caches.delete(
                      cacheName
                    );
                  }

                  return Promise.resolve();
                }
              )
            );
          }
        )
    );

    self.clients.claim();
  }
);


/*
 * 같은 사이트의 GET 요청은
 * 네트워크를 먼저 확인하고,
 * 실패하면 캐시 파일을 사용합니다.
 */
self.addEventListener(
  "fetch",
  function (
    event
  ) {
    const request =
      event.request;

    if (
      request.method !==
      "GET"
    ) {
      return;
    }

    const requestUrl =
      new URL(
        request.url
      );

    /*
     * 외부 Apps Script 요청과
     * 외부 QR 라이브러리는
     * 서비스 워커 캐시에서 제외합니다.
     */
    if (
      requestUrl.origin !==
      self.location.origin
    ) {
      return;
    }

    event.respondWith(
      fetch(
        request
      )
        .then(
          function (
            response
          ) {
            if (
              response &&
              response.ok
            ) {
              const responseCopy =
                response.clone();

              caches
                .open(
                  CACHE_NAME
                )
                .then(
                  function (
                    cache
                  ) {
                    cache.put(
                      request,
                      responseCopy
                    );
                  }
                );
            }

            return response;
          }
        )
        .catch(
          function () {
            return caches.match(
              request
            );
          }
        )
    );
  }
);
