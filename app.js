const setupScreen =
  document.getElementById(
    "setup-screen"
  );

const shippingScreen =
  document.getElementById(
    "shipping-screen"
  );

const saveButton =
  document.getElementById(
    "save-button"
  );

const shippingWorkerPosition =
  document.getElementById(
    "shipping-worker-position"
  );

const shippingWorkerName =
  document.getElementById(
    "shipping-worker-name"
  );

const shippingWorkerError =
  document.getElementById(
    "shipping-worker-error"
  );

  const shippingCharacter =
  document.getElementById(
    "shipping-character"
  );

const shippingHead =
  document.getElementById(
    "shipping-head"
  );

const shippingFace =
  document.getElementById(
    "shipping-face"
  );

const shippingEffectLeft =
  document.getElementById(
    "shipping-effect-left"
  );

const shippingEffectRight =
  document.getElementById(
    "shipping-effect-right"
  );

const shippingWorkerDisplay =
  document.getElementById(
    "shipping-worker-display"
  );

const qrReader =
  document.getElementById(
    "qr-reader"
  );

const qrScanStatus =
  document.getElementById(
    "qr-scan-status"
  );

const shippingCompleteBanner =
  document.getElementById(
    "shipping-complete-banner"
  );

const qrReaderFrame =
  document.getElementById(
    "qr-reader-frame"
  );

const qrZoomOutButton =
  document.getElementById(
    "qr-zoom-out-button"
  );

const qrZoomInButton =
  document.getElementById(
    "qr-zoom-in-button"
  );

const qrZoomDisplay =
  document.getElementById(
    "qr-zoom-display"
  );

const qrFocusIndicator =
  document.getElementById(
    "qr-focus-indicator"
  );

const changeWorkerButton =
  document.getElementById(
    "change-worker-button"
  );

const characterGrid =
  document.getElementById(
    "character-grid"
  );

const previewCharacter =
  document.getElementById(
    "preview-character"
  );

const previewHead =
  document.getElementById(
    "preview-head"
  );

const previewFace =
  document.getElementById(
    "preview-face"
  );

const previewEffect =
  document.getElementById(
    "preview-effect"
  );


/*
 * 주변효과를 캐릭터 양쪽에
 * 한 개씩 표시하기 위해
 * 기존 효과 이미지를 하나 복제합니다.
 */
const previewEffectRight =
  previewEffect.cloneNode(
    false
  );

previewEffectRight.id =
  "preview-effect-right";

previewEffectRight.hidden =
  true;

previewEffect.insertAdjacentElement(
  "afterend",
  previewEffectRight
);

const headAccessoryGrid =
  document.getElementById(
    "head-accessory-grid"
  );

const faceAccessoryGrid =
  document.getElementById(
    "face-accessory-grid"
  );

const effectAccessoryGrid =
  document.getElementById(
    "effect-accessory-grid"
  );


/*
 * 고고출GO에서 사용할
 * 메인 캐릭터 목록입니다.
 *
 * file 값은
 * APP/assets/characters 폴더의
 * 실제 파일명과 같아야 합니다.
 */
const characters = [
  {
    id: "brachiosaurus",
    name: "브라키오사우르스",
    file: "brachiosaurus.png"
  },
  {
    id: "dolphin",
    name: "돌고래",
    file: "dolphin.png"
  },
  {
    id: "jellyfish",
    name: "해파리",
    file: "jellyfish.png"
  },
  {
    id: "chick",
    name: "병아리",
    file: "chick.png"
  },
  {
    id: "tiger",
    name: "호랑이",
    file: "tiger.png"
  },
  {
    id: "bear",
    name: "반달가슴곰",
    file: "bear.png"
  },
  {
    id: "monkey",
    name: "원숭이",
    file: "monkey.png"
  },
  {
    id: "crocodile",
    name: "악어",
    file: "crocodile.png"
  },
  {
    id: "panda",
    name: "판다",
    file: "panda.png"
  },
  {
    id: "hamster",
    name: "햄스터",
    file: "hamster.png"
  }
];

/*
 * 머리 액세서리 목록
 */
const headAccessories = [
  {
    id: "hat",
    name: "모자",
    file: "hat.png"
  },
  {
    id: "crown",
    name: "왕관",
    file: "crown.png"
  },
  {
    id: "headset",
    name: "헤드셋",
    file: "headset.png"
  }
];


/*
 * 얼굴 액세서리 목록
 */
const faceAccessories = [
  {
    id: "sunglasses",
    name: "선글라스",
    file: "sunglasses.png"
  },
  {
    id: "heart-glasses",
    name: "하트 선글라스",
    file: "heart-glasses.png"
  },
  {
    id: "spiral-glasses",
    name: "뺑글이 안경",
    file: "spiral-glasses.png"
  }
];


/*
 * 주변효과 목록
 */
const effectAccessories = [
  {
    id: "sparkle",
    name: "반짝이",
    file: "sparkle.png"
  },
  {
    id: "clover",
    name: "클로버",
    file: "clover.png"
  },
  {
    id: "heart",
    name: "하트",
    file: "heart.png"
  }
];


/*
 * 좌표 조정 중 페이지가 새로고침되어도
 * 마지막 미리보기 선택 상태를 유지합니다.
 *
 * 브라우저 탭을 완전히 닫으면
 * sessionStorage 값은 자동으로 사라집니다.
 */
let selectedCharacterId =
  sessionStorage.getItem(
    "gogoPreviewCharacter"
  ) || "dolphin";

let selectedHeadAccessoryId =
  sessionStorage.getItem(
    "gogoPreviewHead"
  ) || "";

let selectedFaceAccessoryId =
  sessionStorage.getItem(
    "gogoPreviewFace"
  ) || "";

let selectedEffectAccessoryId =
  sessionStorage.getItem(
    "gogoPreviewEffect"
  ) || "";

  /*
 * 현재 선택된 캐릭터와 액세서리를
 * 개발용 미리보기 상태로 저장합니다.
 */
function savePreviewSelection() {
  sessionStorage.setItem(
    "gogoPreviewCharacter",
    selectedCharacterId
  );

  sessionStorage.setItem(
    "gogoPreviewHead",
    selectedHeadAccessoryId
  );

  sessionStorage.setItem(
    "gogoPreviewFace",
    selectedFaceAccessoryId
  );

  sessionStorage.setItem(
    "gogoPreviewEffect",
    selectedEffectAccessoryId
  );
}


/*
 * 목록에서 ID가 같은 항목을 찾습니다.
 */
function findItemById(
  items,
  itemId
) {
  return (
    items.find(
      function (item) {
        return item.id === itemId;
      }
    ) || null
  );
}

/*
 * 고고출GO 출고자 설정을 저장할
 * LocalStorage 키입니다.
 */
const SHIPPING_WORKER_STORAGE_KEY =
  "gogoShippingWorker";

const QR_CAMERA_SCALE_STORAGE_KEY =
  "gogoQrCameraScale";


/*
 * 고고출GO가 출고 처리를 요청할
 * 운영 Apps Script 웹앱 주소입니다.
 */
const DYO_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxBPRurXlXVYN9j2-HpU_bSWDQmuQUavaC_QRUYsdFYyI4y4vH2sBQRgzALihwiXM6VuQ/exec";

  /*
 * 출고자 설정 화면을 표시합니다.
 */
function showSetupScreen() {
  stopQrCamera();

  hideShippingCompleteBanner();

  setupScreen.hidden =
    false;

  shippingScreen.hidden =
    true;

  sessionStorage.setItem(
    CURRENT_SCREEN_STORAGE_KEY,
    "setup"
  );

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
}


/*
 * 출고 처리 화면을 표시합니다.
 */
function showShippingScreen() {
  setupScreen.hidden =
    true;

  shippingScreen.hidden =
    false;

  sessionStorage.setItem(
    CURRENT_SCREEN_STORAGE_KEY,
    "shipping"
  );

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

  /*
   * hidden 상태가 해제된 뒤
   * QR 영역의 실제 크기가 계산되도록
   * 다음 화면 프레임에서 카메라를 실행합니다.
   */
  window.requestAnimationFrame(
    function () {
      startQrCamera();
    }
  );
}


/*
 * 새로고침 후 마지막 화면을 복원합니다.
 */
function restoreCurrentScreen() {
  const currentScreen =
    sessionStorage.getItem(
      CURRENT_SCREEN_STORAGE_KEY
    );

  if (
    currentScreen ===
    "shipping"
  ) {
    const displaySucceeded =
      showShippingWorkerScreen();

    if (displaySucceeded) {
      showShippingScreen();
      return;
    }
  }

  showSetupScreen();
}

  /*
 * 현재 표시 중인 화면을
 * 새로고침 후에도 유지하기 위한 키입니다.
 */
const CURRENT_SCREEN_STORAGE_KEY =
  "gogoCurrentScreen";

  /*
 * QR 카메라 실행 상태입니다.
 */
let html5QrCode = null;

let isQrCameraStarting =
  false;

let isQrCameraRunning =
  false;


/*
 * QR 카메라 기본 확대 배율입니다.
 *
 * 1 = 확대 없음
 * 1.5 = 1.5배
 * 2 = 2배
 *
 * 휴대폰 카메라가 지원하는 범위를
 * 벗어나면 자동으로 최대 또는 최소값에 맞춥니다.
 */
const QR_CAMERA_ZOOM =
  2;


/*
 * 같은 QR이 카메라에 계속 보일 때
 * 중복으로 처리되지 않도록 막습니다.
 */
let isProcessingQr =
  false;

let lastDecodedQrText =
  "";

let lastDecodedQrTime =
  0;

let shippingCompleteTimer =
  null;

let qrCameraScale =
  Number(
    localStorage.getItem(
      QR_CAMERA_SCALE_STORAGE_KEY
    )
  ) || 1.6;



/*
 * 같은 QR을 다시 처리할 수 있게 되는
 * 최소 대기 시간입니다.
 */
const QR_DUPLICATE_LOCK_MS =
  3000;

  /*
 * QR에서 읽은 문자열의
 * 앞뒤 공백을 제거합니다.
 */
function cleanQrText(
  value
) {
  return String(value || "")
    .trim();
}


/*
 * QR 문자열에서 관리번호를 추출합니다.
 *
 * 지원 형식:
 *
 * 1. Apps Script 출고 URL
 *    ?action=ship&managementNumber=관리번호
 *
 * 2. 관리번호만 들어 있는 QR
 */
function extractManagementNumber(
  decodedText
) {
  const cleanText =
    cleanQrText(
      decodedText
    );

  if (!cleanText) {
    return "";
  }

  /*
   * URL 형태의 QR인지 먼저 확인합니다.
   */
  try {
    const qrUrl =
      new URL(
        cleanText
      );

    const managementNumber =
      cleanQrText(
        qrUrl.searchParams.get(
          "managementNumber"
        )
      );

    if (managementNumber) {
      return managementNumber;
    }

    /*
     * URL인데 관리번호가 없다면
     * 전체 URL을 관리번호로 사용하지 않습니다.
     */
    return "";

  } catch (error) {
    /*
     * URL이 아니면 관리번호만 들어 있는
     * QR 문자열로 판단합니다.
     */
  }

  return cleanText;
}


/*
 * 현재 QR을 처리해도 되는지 확인합니다.
 */
function canProcessQr(
  decodedText
) {
  const cleanText =
    cleanQrText(
      decodedText
    );

  if (!cleanText) {
    return false;
  }

  if (isProcessingQr) {
    return false;
  }

  const now =
    Date.now();

  const isSameQr =
    cleanText ===
    lastDecodedQrText;

  const isWithinLockTime =
    now -
    lastDecodedQrTime <
    QR_DUPLICATE_LOCK_MS;

  if (
    isSameQr &&
    isWithinLockTime
  ) {
    return false;
  }

  return true;
}

/*
 * QR이 인식되었을 때
 * 한 번만 처리되도록 잠금을 적용합니다.
 *
 * 실제 Apps Script 요청은
 * 다음 단계에서 이 함수 안에 연결합니다.
 */
async function handleQrDecoded(
  decodedText
) {
  const cleanText =
    cleanQrText(
      decodedText
    );

  if (
    !canProcessQr(
      cleanText
    )
  ) {
    return;
  }

  const managementNumber =
    extractManagementNumber(
      cleanText
    );

  isProcessingQr =
    true;

  lastDecodedQrText =
    cleanText;

  lastDecodedQrTime =
    Date.now();

  /*
   * QR을 정상적으로 읽은 순간
   * 짧게 한 번 진동합니다.
   */
  if (managementNumber) {
    vibrateDevice(
      80
    );
  }

  if (!managementNumber) {
    updateQrScanStatus(
      "관리번호가 없는 QR입니다."
    );

    console.warn(
      "관리번호 추출 실패:",
      cleanText
    );

    window.setTimeout(
      function () {
        isProcessingQr =
          false;

        updateQrScanStatus(
          "다른 QR을 비춰주세요"
        );
      },
      QR_DUPLICATE_LOCK_MS
    );

    return;
  }

  updateQrScanStatus(
    "출고 처리 중"
  );

  console.log(
    "추출된 관리번호:",
    managementNumber
  );

  try {
    const shippingResult =
      await requestShipping(
        managementNumber
      );

    console.log(
      "출고 처리 결과:",
      shippingResult
    );

    updateQrScanStatus(
      shippingResult.message ||
      "출고 처리 결과를 확인했습니다."
    );

    /*
     * 정상 출고 완료
     */
    if (
      shippingResult.status ===
      "completed"
    ) {
      updateQrScanStatus(
        "출고가 완료되었습니다."
      );

      await showShippingCompleteBanner();

      isProcessingQr =
        false;

      updateQrScanStatus(
        "다음 QR을 비춰주세요"
      );

      return;
    }

    /*
     * 이미 출고된 주문
     */
    if (
      shippingResult.status ===
      "already_completed"
    ) {
      vibrateDevice([
        100,
        80,
        100
      ]);

      updateQrScanStatus(
        "이미 출고된 주문입니다."
      );
    }

    /*
     * 주문을 찾지 못한 경우
     */
    if (
      shippingResult.status ===
      "not_found"
    ) {
      vibrateDevice([
        180,
        100,
        180
      ]);

      updateQrScanStatus(
        "주문을 찾을 수 없습니다."
      );
    }

    window.setTimeout(
      function () {
        isProcessingQr =
          false;

        updateQrScanStatus(
          "다른 QR을 비춰주세요"
        );
      },
      QR_DUPLICATE_LOCK_MS
    );

  } catch (error) {
    console.error(
      "출고 요청 오류:",
      error
    );

    vibrateDevice([
      200,
      100,
      200
    ]);

    updateQrScanStatus(
      error &&
      error.message
        ? error.message
        : "출고 요청에 실패했습니다."
    );

    window.setTimeout(
      function () {
        isProcessingQr =
          false;

        updateQrScanStatus(
          "다른 QR을 비춰주세요"
        );
      },
      QR_DUPLICATE_LOCK_MS
    );
  }
}


/*
 * QR 카메라 상태 문구를 변경합니다.
 */
function updateQrScanStatus(
  message
) {
  if (!qrScanStatus) {
    return;
  }

  qrScanStatus.textContent =
    message;
}


/*
 * 지원되는 휴대폰에서
 * 지정한 패턴으로 진동합니다.
 */
function vibrateDevice(
  pattern
) {
  if (
    typeof navigator.vibrate !==
    "function"
  ) {
    return;
  }

  navigator.vibrate(
    pattern
  );
}

/*
 * 카메라 영상 확대 배율을 적용하고
 * 현재 배율을 저장합니다.
 */
function applyQrCameraScale() {
  document.documentElement
    .style
    .setProperty(
      "--qr-camera-scale",
      qrCameraScale
    );

  if (
    qrZoomDisplay
  ) {
    qrZoomDisplay.textContent =
      qrCameraScale.toFixed(1) +
      "배";
  }

  try {
    localStorage.setItem(
      QR_CAMERA_SCALE_STORAGE_KEY,
      String(
        qrCameraScale
      )
    );

  } catch (error) {
    console.warn(
      "카메라 배율 저장 실패:",
      error
    );
  }
}


/*
 * 카메라 영상 확대 배율을
 * 지정한 값만큼 변경합니다.
 */
function changeQrCameraScale(
  amount
) {
  qrCameraScale +=
    amount;

  qrCameraScale =
    Math.max(
      1,
      Math.min(
        2.5,
        qrCameraScale
      )
    );

  qrCameraScale =
    Number(
      qrCameraScale.toFixed(1)
    );

  applyQrCameraScale();
}


/*
 * 카메라 영상 확대 버튼
 */
if (
  qrZoomInButton
) {
  qrZoomInButton.addEventListener(
    "click",
    function (
      event
    ) {
      event.stopPropagation();

      changeQrCameraScale(
        0.1
      );
    }
  );
}


/*
 * 카메라 영상 축소 버튼
 */
if (
  qrZoomOutButton
) {
  qrZoomOutButton.addEventListener(
    "click",
    function (
      event
    ) {
      event.stopPropagation();

      changeQrCameraScale(
        -0.1
      );
    }
  );
}


/*
 * 저장된 카메라 배율을
 * 앱 시작 시 적용합니다.
 */
applyQrCameraScale();


/*
 * 카메라 화면을 탭하면
 * 해당 위치에 초점 표시를 보여주고
 * 지원되는 휴대폰에서는
 * 연속 자동초점을 다시 요청합니다.
 */
if (
  qrReaderFrame
) {
  qrReaderFrame.addEventListener(
    "click",
    async function (
      event
    ) {
      if (
        event.target.closest(
          ".qr-zoom-controls"
        )
      ) {
        return;
      }

      if (
        qrFocusIndicator
      ) {
        const frameRect =
          qrReaderFrame
            .getBoundingClientRect();

        qrFocusIndicator.style.left =
          (
            event.clientX -
            frameRect.left
          ) +
          "px";

        qrFocusIndicator.style.top =
          (
            event.clientY -
            frameRect.top
          ) +
          "px";

        qrFocusIndicator.hidden =
          false;

        qrFocusIndicator.classList.remove(
          "focus-active"
        );

        void qrFocusIndicator.offsetWidth;

        qrFocusIndicator.classList.add(
          "focus-active"
        );

        window.setTimeout(
          function () {
            qrFocusIndicator.hidden =
              true;

            qrFocusIndicator.classList.remove(
              "focus-active"
            );
          },
          600
        );
      }

      try {
        if (
          html5QrCode &&
          isQrCameraRunning
        ) {
          await html5QrCode
            .applyVideoConstraints({
              advanced: [
                {
                  focusMode:
                    "continuous"
                }
              ]
            });
        }

      } catch (error) {
        console.log(
          "이 기기에서는 웹 자동초점을 지원하지 않습니다.",
          error
        );
      }
    }
  );
}

/*
 * 출고완료 배너를 숨깁니다.
 */
function hideShippingCompleteBanner() {
  if (!shippingCompleteBanner) {
    return;
  }

  shippingCompleteBanner.hidden =
    true;
}


/*
 * 출고완료 배너를 표시하고
 * 지원되는 휴대폰에서는 진동을 실행합니다.
 *
 * 1.6초 후 자동으로 배너를 숨깁니다.
 */
function showShippingCompleteBanner() {
  return new Promise(
    function (resolve) {
      if (
        shippingCompleteTimer
      ) {
        window.clearTimeout(
          shippingCompleteTimer
        );

        shippingCompleteTimer =
          null;
      }

      if (
        shippingCompleteBanner
      ) {
        shippingCompleteBanner.hidden =
          false;
      }

      vibrateDevice([
        120,
        80,
        120
      ]);

      shippingCompleteTimer =
        window.setTimeout(
          function () {
            hideShippingCompleteBanner();

            shippingCompleteTimer =
              null;

            resolve();
          },
          1600
        );
    }
  );
}


/*
 * QR 카메라 실행 오류를
 * 사용자가 확인할 수 있는 문구로 바꿉니다.
 */
function getQrCameraErrorMessage(
  error
) {
  const errorText =
    String(
      error &&
      error.message
        ? error.message
        : error || ""
    ).toLowerCase();

  if (
    errorText.includes(
      "permission"
    ) ||
    errorText.includes(
      "notallowed"
    )
  ) {
    return (
      "카메라 권한을 허용해주세요."
    );
  }

  if (
    errorText.includes(
      "notfound"
    ) ||
    errorText.includes(
      "devicesnotfound"
    )
  ) {
    return (
      "사용 가능한 카메라를 찾지 못했습니다."
    );
  }

  if (
    errorText.includes(
      "notreadable"
    ) ||
    errorText.includes(
      "trackstarterror"
    )
  ) {
    return (
      "다른 앱에서 카메라를 사용 중인지 확인해주세요."
    );
  }

  return (
    "카메라를 실행할 수 없습니다."
  );
}


/*
 * 휴대폰 카메라가 줌을 지원하면
 * QR 카메라에 지정한 확대 배율을 적용합니다.
 *
 * 줌을 지원하지 않는 기기에서는
 * 기존 카메라 화면을 그대로 유지합니다.
 */
async function applyQrCameraZoom() {
  if (
    !html5QrCode ||
    !isQrCameraRunning
  ) {
    return;
  }

  try {
    const capabilities =
      html5QrCode
        .getRunningTrackCapabilities();

    const zoomCapabilities =
      capabilities
        ? capabilities.zoom
        : null;

    if (
      !zoomCapabilities ||
      typeof zoomCapabilities.min !==
        "number" ||
      typeof zoomCapabilities.max !==
        "number"
    ) {
      console.log(
        "이 카메라는 줌 기능을 지원하지 않습니다."
      );

      return;
    }

    const minimumZoom =
      zoomCapabilities.min;

    const maximumZoom =
      zoomCapabilities.max;

    const targetZoom =
      Math.min(
        maximumZoom,
        Math.max(
          minimumZoom,
          QR_CAMERA_ZOOM
        )
      );

    await html5QrCode
      .applyVideoConstraints({
        advanced: [
          {
            zoom: targetZoom
          }
        ]
      });

    console.log(
      "QR 카메라 확대 적용:",
      targetZoom
    );

  } catch (error) {
    /*
     * 확대를 지원하지 않거나
     * 브라우저가 줌 설정을 거부해도
     * QR 카메라 자체는 계속 사용합니다.
     */
    console.warn(
      "QR 카메라 확대 적용 실패:",
      error
    );
  }
}


/*
 * QR 카메라를 실행합니다.
 *
 * 출고 처리 화면의 흰색 영역 안에
 * 후면 카메라 영상을 표시합니다.
 */
async function startQrCamera() {
  if (
    isQrCameraStarting ||
    isQrCameraRunning
  ) {
    return;
  }

  if (
    !qrReader ||
    !qrScanStatus
  ) {
    return;
  }

  if (
    typeof Html5Qrcode ===
    "undefined"
  ) {
    updateQrScanStatus(
      "QR 카메라 기능을 불러오지 못했습니다."
    );

    return;
  }

  isQrCameraStarting =
    true;

  updateQrScanStatus(
    "카메라 권한 확인 중"
  );

  try {
    if (!html5QrCode) {
      html5QrCode =
        new Html5Qrcode(
          "qr-reader",
          {
            formatsToSupport: [
              Html5QrcodeSupportedFormats
                .QR_CODE
            ],

            /*
             * 아이폰에서 네이티브
             * BarcodeDetector 대신
             * 라이브러리 기본 QR 해독기를 사용합니다.
             */
            useBarCodeDetectorIfSupported:
              false,

            verbose:
              false
          }
        );
    }

    await html5QrCode.start(
      {
        facingMode: {
          ideal:
            "environment"
        },

        width: {
          ideal:
            1920
        },

        height: {
          ideal:
            1080
        },

        frameRate: {
          ideal:
            30
        }
      },
      {
        /*
         * QR 해독 횟수입니다.
         * 너무 높이면 아이폰에서
         * 처리 부담이 커질 수 있습니다.
         */
        fps:
          12,

        /*
         * 후면 카메라는 일반적으로
         * 좌우 반전되지 않으므로
         * 반전 QR 재검사를 생략합니다.
         */
        disableFlip:
          true

        /*
         * qrbox를 지정하지 않습니다.
         * 카메라 영상 전체를 스캔합니다.
         */
      },
      function (
        decodedText
      ) {
        handleQrDecoded(
          decodedText
        );
      },
      function () {
        /*
         * 인식 대기 중 발생하는 오류는
         * 정상적인 반복 상태이므로
         * 화면에는 표시하지 않습니다.
         */
      }
    );

    isQrCameraRunning =
      true;

    updateQrScanStatus(
      "QR 코드를 비춰주세요"
    );

  } catch (error) {
    console.error(
      "QR 카메라 실행 오류:",
      error
    );

    updateQrScanStatus(
      getQrCameraErrorMessage(
        error
      )
    );

  } finally {
    isQrCameraStarting =
      false;
  }
}


/*
 * 실행 중인 QR 카메라를 종료합니다.
 */
async function stopQrCamera() {
  if (
    !html5QrCode ||
    !isQrCameraRunning
  ) {
    return;
  }

  try {
    await html5QrCode.stop();

    isQrCameraRunning =
      false;

    isProcessingQr =
      false;

    lastDecodedQrText =
      "";

    lastDecodedQrTime =
      0;

    updateQrScanStatus(
      "카메라 준비 중"
    );

  } catch (error) {
    console.error(
      "QR 카메라 종료 오류:",
      error
    );
  }
}

/*
 * 입력 오류 문구를 표시합니다.
 */
function showShippingWorkerError(
  message
) {
  shippingWorkerError.textContent =
    message;

  shippingWorkerError.hidden =
    false;
}


/*
 * 입력 오류 문구를 숨깁니다.
 */
function hideShippingWorkerError() {
  shippingWorkerError.textContent =
    "";

  shippingWorkerError.hidden =
    true;
}


/*
 * 출고자 이름의 앞뒤 공백과
 * 연속된 공백을 정리합니다.
 */
function cleanShippingWorkerName(
  value
) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ");
}


/*
 * 현재 출고자 설정을
 * 휴대폰 브라우저에 저장합니다.
 */
function saveShippingWorkerSettings() {
  const position =
    shippingWorkerPosition.value;

  const name =
    cleanShippingWorkerName(
      shippingWorkerName.value
    );

  if (!position) {
    showShippingWorkerError(
      "출고자 직급을 선택해주세요."
    );

    shippingWorkerPosition.focus();

    return false;
  }

  if (!name) {
    showShippingWorkerError(
      "출고자 이름을 입력해주세요."
    );

    shippingWorkerName.focus();

    return false;
  }

  const settings = {
    position: position,
    name: name,
    shippingWorker:
      position + " " + name,

    characterId:
      selectedCharacterId,

    headAccessoryId:
      selectedHeadAccessoryId,

    faceAccessoryId:
      selectedFaceAccessoryId,

    effectAccessoryId:
      selectedEffectAccessoryId
  };

  try {
    localStorage.setItem(
      SHIPPING_WORKER_STORAGE_KEY,
      JSON.stringify(settings)
    );

  } catch (error) {
    showShippingWorkerError(
      "출고자 정보를 저장할 수 없습니다."
    );

    return false;
  }

  shippingWorkerName.value =
    name;

  hideShippingWorkerError();

  return true;
}


/*
 * 이전에 저장한 출고자 정보를
 * 입력칸에 다시 표시합니다.
 */
function restoreShippingWorkerSettings() {
  let savedSettingsText = "";

  try {
    savedSettingsText =
      localStorage.getItem(
        SHIPPING_WORKER_STORAGE_KEY
      ) || "";

  } catch (error) {
    return;
  }

  if (!savedSettingsText) {
    return;
  }

  let savedSettings;

  try {
    savedSettings =
      JSON.parse(
        savedSettingsText
      );

  } catch (error) {
    return;
  }

  if (
    !savedSettings ||
    typeof savedSettings !== "object"
  ) {
    return;
  }

  shippingWorkerPosition.value =
    savedSettings.position || "";

  shippingWorkerName.value =
    savedSettings.name || "";
}

/*
 * LocalStorage에 저장된
 * 출고자 정보를 반환합니다.
 */
function getSavedShippingWorkerSettings() {
  let savedSettingsText =
    "";

  try {
    savedSettingsText =
      localStorage.getItem(
        SHIPPING_WORKER_STORAGE_KEY
      ) || "";

  } catch (error) {
    return null;
  }

  if (!savedSettingsText) {
    return null;
  }

  try {
    const savedSettings =
      JSON.parse(
        savedSettingsText
      );

    if (
      !savedSettings ||
      typeof savedSettings !==
        "object"
    ) {
      return null;
    }

    return savedSettings;

  } catch (error) {
    return null;
  }
}

/*
 * 관리번호와 출고처리자를
 * Apps Script JSONP API로 전송합니다.
 */
function requestShipping(
  managementNumber
) {
  const savedSettings =
    getSavedShippingWorkerSettings();

  if (!savedSettings) {
    return Promise.reject(
      new Error(
        "저장된 출고자 정보가 없습니다."
      )
    );
  }

  const shippingWorker =
    cleanQrText(
      savedSettings.shippingWorker
    );

  if (!shippingWorker) {
    return Promise.reject(
      new Error(
        "출고자 이름이 없습니다."
      )
    );
  }

  return new Promise(
    function (
      resolve,
      reject
    ) {
      const callbackName =
        "gogoShippingCallback_" +
        Date.now() +
        "_" +
        Math.floor(
          Math.random() *
          100000
        );

      const script =
        document.createElement(
          "script"
        );

      let timeoutId =
        null;

      let requestFinished =
        false;

      /*
       * JSONP 요청이 끝난 뒤
       * 생성한 callback과 script를 정리합니다.
       */
      function cleanupJsonpRequest() {
        if (timeoutId) {
          window.clearTimeout(
            timeoutId
          );

          timeoutId =
            null;
        }

        if (
          script.parentNode
        ) {
          script.parentNode.removeChild(
            script
          );
        }

        try {
          delete window[
            callbackName
          ];

        } catch (error) {
          window[
            callbackName
          ] =
            undefined;
        }
      }

      /*
       * Apps Script가 반환한 결과를
       * JSONP callback으로 받습니다.
       */
      window[
        callbackName
      ] =
        function (
          result
        ) {
          if (requestFinished) {
            return;
          }

          requestFinished =
            true;

          cleanupJsonpRequest();

          if (
            !result ||
            typeof result !==
              "object"
          ) {
            reject(
              new Error(
                "출고 서버 응답이 올바르지 않습니다."
              )
            );

            return;
          }

          resolve(
            result
          );
        };

      /*
       * 스크립트 자체를 불러오지 못한 경우입니다.
       */
      script.onerror =
        function () {
          if (requestFinished) {
            return;
          }

          requestFinished =
            true;

          cleanupJsonpRequest();

          reject(
            new Error(
              "출고 서버에 연결할 수 없습니다."
            )
          );
        };

      const requestUrl =
        DYO_WEB_APP_URL +
        "?action=ship_api" +
        "&managementNumber=" +
        encodeURIComponent(
          managementNumber
        ) +
        "&shippingWorker=" +
        encodeURIComponent(
          shippingWorker
        ) +
        "&callback=" +
        encodeURIComponent(
          callbackName
        ) +
        "&timestamp=" +
        Date.now();

      script.src =
        requestUrl;

      script.async =
        true;

      /*
       * 15초 안에 응답이 없으면
       * 요청 실패로 처리합니다.
       */
      timeoutId =
        window.setTimeout(
          function () {
            if (requestFinished) {
              return;
            }

            requestFinished =
              true;

            cleanupJsonpRequest();

            reject(
              new Error(
                "출고 서버 응답 시간이 초과되었습니다."
              )
            );
          },
          15000
        );

      document.head.appendChild(
        script
      );
    }
  );
}

/*
 * Apps Script가 반환한 HTML에서
 * 출고 처리 결과를 판별합니다.
 */
function parseShippingResponse(
  responseText
) {
  const cleanResponseText =
    String(
      responseText || ""
    );

  if (
    cleanResponseText.includes(
      "출고 완료"
    )
  ) {
    return {
      success: true,
      status: "completed",
      message: "출고가 완료되었습니다."
    };
  }

  if (
    cleanResponseText.includes(
      "이미 출고된 주문입니다"
    )
  ) {
    return {
      success: false,
      status: "already_completed",
      message:
        "이미 출고된 주문입니다."
    };
  }

  if (
    cleanResponseText.includes(
      "주문을 찾을 수 없습니다"
    )
  ) {
    return {
      success: false,
      status: "not_found",
      message:
        "관리번호에 해당하는 주문을 찾지 못했습니다."
    };
  }

  if (
    cleanResponseText.includes(
      "출고 처리 실패"
    ) ||
    cleanResponseText.includes(
      "오류가 발생했습니다"
    )
  ) {
    return {
      success: false,
      status: "failed",
      message:
        "출고 처리 중 오류가 발생했습니다."
    };
  }

  return {
    success: false,
    status: "unknown",
    message:
      "출고 처리 결과를 확인할 수 없습니다."
  };
}


/*
 * 출고 처리 화면의 액세서리 이미지를
 * 표시하거나 숨깁니다.
 */
function setShippingAccessoryImage(
  imageElement,
  category,
  accessory
) {
  if (!accessory) {
    imageElement.hidden =
      true;

    imageElement.src =
      "";

    imageElement.alt =
      "";

    return;
  }

  imageElement.src =
    getAccessoryImagePath(
      category,
      accessory.file
    );

  imageElement.alt =
    accessory.name;

  imageElement.hidden =
    false;
}


/*
 * 저장된 출고자 설정을 읽어
 * 출고 처리 화면에 표시합니다.
 */
function showShippingWorkerScreen() {
  let savedSettingsText = "";

  try {
    savedSettingsText =
      localStorage.getItem(
        SHIPPING_WORKER_STORAGE_KEY
      ) || "";

  } catch (error) {
    showShippingWorkerError(
      "저장된 출고자 정보를 불러올 수 없습니다."
    );

    return false;
  }

  if (!savedSettingsText) {
    showShippingWorkerError(
      "저장된 출고자 정보가 없습니다."
    );

    return false;
  }

  let savedSettings;

  try {
    savedSettings =
      JSON.parse(
        savedSettingsText
      );

  } catch (error) {
    showShippingWorkerError(
      "저장된 출고자 정보가 올바르지 않습니다."
    );

    return false;
  }

  if (
    !savedSettings ||
    typeof savedSettings !== "object"
  ) {
    showShippingWorkerError(
      "저장된 출고자 정보가 올바르지 않습니다."
    );

    return false;
  }

  const character =
    findItemById(
      characters,
      savedSettings.characterId
    );

  const headAccessory =
    findItemById(
      headAccessories,
      savedSettings.headAccessoryId
    );

  const faceAccessory =
    findItemById(
      faceAccessories,
      savedSettings.faceAccessoryId
    );

  const effectAccessory =
    findItemById(
      effectAccessories,
      savedSettings.effectAccessoryId
    );

  /*
   * 저장된 캐릭터가 없으면
   * 기본 돌고래를 사용합니다.
   */
  const shippingCharacterData =
    character ||
    findItemById(
      characters,
      "dolphin"
    );

  shippingCharacter.src =
    getCharacterImagePath(
      shippingCharacterData.file
    );

  shippingCharacter.alt =
    shippingCharacterData.name +
    " 출고자 캐릭터";

  setShippingAccessoryImage(
    shippingHead,
    "head",
    headAccessory
  );

  setShippingAccessoryImage(
    shippingFace,
    "face",
    faceAccessory
  );

  /*
   * 주변효과는 같은 이미지를
   * 캐릭터 양쪽에 표시합니다.
   */
  setShippingAccessoryImage(
    shippingEffectLeft,
    "effect",
    effectAccessory
  );

  setShippingAccessoryImage(
    shippingEffectRight,
    "effect",
    effectAccessory
  );

  shippingWorkerDisplay.textContent =
    savedSettings.shippingWorker ||
    (
      (savedSettings.position || "") +
      " " +
      (savedSettings.name || "")
    ).trim();

  applyShippingWorkerLayout(
    savedSettings
  );

  hideShippingWorkerError();

  return true;
}

/*
 * 사용자가 다시 입력하면
 * 이전 오류 문구를 숨깁니다.
 */
shippingWorkerPosition.addEventListener(
  "change",
  function () {
    hideShippingWorkerError();
  }
);

shippingWorkerName.addEventListener(
  "input",
  function () {
    hideShippingWorkerError();
  }
);

/*
 * 캐릭터 이미지의 전체 경로를 만듭니다.
 */
function getCharacterImagePath(
  fileName
) {
  return (
    "APP/assets/characters/" +
    fileName
  );
}

/*
 * 액세서리 이미지의 전체 경로를 만듭니다.
 */
function getAccessoryImagePath(
  category,
  fileName
) {
  return (
    "APP/assets/accessories/" +
    category +
    "/" +
    fileName
  );
}

const previewLayout = {
  brachiosaurus: {
    left: 50,
    top: 15.2,
    width: 33,
    x: 6,
    y: 1
  },

  dolphin: {
    left: 50,
    top: 15.2,
    width: 34,
    x: 0,
    y: 0
  },

  jellyfish: {
    left: 50,
    top: 15.2,
    width: 27,
    x: 1,
    y: 3
  },

  chick: {
    left: 50,
    top: 15.2,
    width: 30,
    x: 3,
    y: 3
  },

  tiger: {
    left: 50,
    top: 15.2,
    width: 29,
    x: 5,
    y: 3
  },

  bear: {
    left: 50,
    top: 15.2,
    width: 25,
    x: 0,
    y: 1
  },

  monkey: {
    left: 49,
    top: 15.2,
    width: 34,
    x: 0,
    y: 2
  },

  crocodile: {
    left: 50,
    top: 15.2,
    width: 36,
    x: 5,
    y: 8
  },

  panda: {
    left: 50,
    top: 15.2,
    width: 25,
    x: 0,
    y: 1
  },

  hamster: {
    left: 50,
    top: 15.2,
    width: 28,
    x: 0,
    y: 3
  }
};

/*
 * 액세서리 미리보기 공통 좌표와
 * 캐릭터별 세부 보정값입니다.
 *
 * common:
 * 모든 캐릭터에 기본 적용되는 좌표입니다.
 *
 * 각 캐릭터:
 * 액세서리별로 필요한 값만 덮어씁니다.
 *
 * left, top, width:
 * 화면 크기를 기준으로 한 퍼센트 값입니다.
 *
 * x, y:
 * 픽셀 단위 미세조정 값입니다.
 */
const accessoryPreviewLayout = {
  common: {
    head: {
      left: 50,
      top: 15.2,
      width: 20,
      x: 0,
      y: 0
    },

    face: {
      left: 50,
      top: 15.2,
      width: 18,
      x: 0,
      y: 0
    },

    effectLeft: {
      left: 28,
      top: 22.2,
      width: 16,
      x: 0,
      y: 0
    },

    effectRight: {
      left: 72,
      top: 18.2,
      width: 16,
      x: 0,
      y: 0
    }
  },

  brachiosaurus: {
    head: {
      hat: {
      width: 6,
      x: -41,
      y: -6
    },
      crown: {
      width: 6,
      x: -40,
      y: -10
    },
      headset: {
      width: 4,
      x: -18,
      y: 12
    },
    },

    face: {
      sunglasses: {
      width: 10,
      x: -48,
      y: 12
      },
      "heart-glasses": {
      width: 9.5,
      x: -49,
      y: 10
      },
      "spiral-glasses": {
      width: 9.5,
      x: -47,
      y: 10
    }
    },

    effect: {
      sparkle: {
        left: {},
        right: {}
      },

      clover: {
        left: {},
        right: {}
      },

      heart: {
        left: {},
        right: {}
      }
    }
  },

  dolphin: {
    head: {
      hat: {
      width: 10,
      x: -20,
      y: -10
      },
      crown: {
      width: 10,
      x: -20,
      y: -13
      },
      headset: {
      width: 5,
      x: 12,
      y: 11
      }
    },

    face: {
      sunglasses: {
      width: 16,
      x: -39,
      y: 21
      },
      "heart-glasses": {
       width: 16,
      x: -39,
      y: 18
      },
      "spiral-glasses": {
      width: 16,
      x: -39,
      y: 16
      }
    },

    effect: {
      sparkle: {
        left: {},
        right: {}
      },

      clover: {
        left: {},
        right: {}
      },

      heart: {
        left: {},
        right: {}
      }
    }
  },

  jellyfish: {
    head: {
      hat: {
      width: 13,
      x: -2,
      y: -8
      },
      crown: {
      width: 10,
      x: 0,
      y: -12
      },
      headset: {
      width: 5,
      x: 52,
      y: 40
      }
    },

    face: {
      sunglasses: {
      width: 20,
      x: 0,
      y: 38
      },
      "heart-glasses": {
      width: 20,
      x: 0,
      y: 36
      },
      "spiral-glasses": {
      width: 21,
      x: 0,
      y: 34
      }
    },

    effect: {
      sparkle: {
        left: {},
        right: {}
      },

      clover: {
        left: {},
        right: {}
      },

      heart: {
        left: {},
        right: {}
      }
    }
  },

  chick: {
    head: {
      hat: {
      width: 16,
      x: -3,
      y: -3
    },
      crown: {
      width: 11,
      x: 1,
      y: -8
    },
      headset: {
      width: 5,
      x: 46,
      y: 45
    }
    },

    face: {
      sunglasses: {
      width: 20,
      x: -4,
      y: 45
    },
      "heart-glasses": {
      width: 20,
      x: -4,
      y: 44
    },
      "spiral-glasses": {
      width: 20,
      x: -4,
      y: 43
    }
    },

    effect: {
      sparkle: {
        left: {},
        right: {}
      },

      clover: {
        left: {},
        right: {}
      },

      heart: {
        left: {},
        right: {}
      }
    }
  },

  tiger: {
    head: {
      hat: {
      width: 13,
      x: -3,
      y: -1
    },

      crown: {
      width: 10,
      x: 0,
      y: -6
    },
      headset: {
      width: 4,
      x: 46,
      y: 10
    }
    },

    face: {
      sunglasses: {
      width: 23,
      x: -2,
      y: 42
    },
      "heart-glasses": {
      width: 23,
      x: -2,
      y: 40
    },
      "spiral-glasses": {
      width: 23,
      x: -1.5,
      y: 38
    }
    },

    effect: {
      sparkle: {
        left: {},
        right: {}
      },

      clover: {
        left: {},
        right: {}
      },

      heart: {
        left: {},
        right: {}
      }
    }
  },

  bear: {
    head: {
      hat: {
      width: 10,
      x: -2,
      y: -3
    },
      crown: {
      width: 8,
      x: -0,
      y: -6
    },
      headset: {
      width: 4,
      x: 42,
      y: 11
    }
    },

    face: {
      sunglasses: {
      width: 20,
      x: 0.5,
      y: 35
    },
      "heart-glasses": {
      width: 20,
      x: 0.5,
      y: 32
    },
      "spiral-glasses": {
      width: 20,
      x: 0.5,
      y: 31
    }
    },

    effect: {
      sparkle: {
        left: {},
        right: {}
      },

      clover: {
        left: {},
        right: {}
      },

      heart: {
        left: {},
        right: {}
      }
    }
  },

  monkey: {
    head: {
      hat: {
      width: 13,
      x: -4,
      y: -3
    },
      crown: {
      width: 10,
      x: -4,
      y: -10
    },
      headset: {
      width: 4,
      x: 56,
      y: 60
    }
    },

    face: {
      sunglasses: {
      width: 22,
      x: -3.5,
      y: 51
    },
      "heart-glasses": {
      width: 22,
      x: -3.7,
      y: 46
    },
      "spiral-glasses": {
      width: 22,
      x: -3.7,
      y: 43
    }
    },

    effect: {
      sparkle: {
        left: {},
        right: {}
      },

      clover: {
        left: {},
        right: {}
      },

      heart: {
        left: {},
        right: {}
      }
    }
  },

  crocodile: {
    head: {
      hat: {
      width: 10,
      x: -10,
      y: -3
    },
      crown: {
      width: 8,
      x: -10,
      y: -1
    },
      headset: {
      width: 4,
      x: 26,
      y: 10
    }
    },

    face: {
      sunglasses: {
      width: 17,
      x: -15,
      y: 26
    },
      "heart-glasses": {
      width: 17,
      x: -15,
      y: 24
    },
      "spiral-glasses": {
      width: 17,
      x: -15,
      y: 24
    }
    },

    effect: {
      sparkle: {
        left: {},
        right: {}
      },

      clover: {
        left: {},
        right: {}
      },

      heart: {
        left: {},
        right: {}
      }
    }
  },

  panda: {
    head: {
      hat: {
      width: 11,
      x: -2,
      y: -1
    },
      crown: {
      width: 8,
      x: 0,
      y: -6
    },
      headset: {
      width: 4,
      x: 45,
      y: 6
    }
    },

    face: {
      sunglasses: {
      width: 20,
      x: 0.5,
      y: 40
    }, 
      "heart-glasses": {
      width: 20,
      x: 0.5,
      y: 34
    },
      "spiral-glasses": {
      width: 20,
      x: 0.5,
      y: 33
    }
    },

    effect: {
      sparkle: {
        left: {},
        right: {}
      },

      clover: {
        left: {},
        right: {}
      },

      heart: {
        left: {},
        right: {}
      }
    }
  },

  hamster: {
    head: {
      hat: {
      width: 12,
      x: -1,
      y: 0
    },
      crown: {
      width: 8,
      x: 1,
      y: -4
    },
      headset: {
      width: 4,
      x: 50,
      y: 16
    }
    },

    face: {
      sunglasses: {
      width: 20,
      x: 0,
      y: 42
    },
      "heart-glasses": {
      width: 20,
      x: 0,
      y: 40
    },
      "spiral-glasses": {
      width: 20,
      x: 0.3,
      y: 39
    }
    },

    effect: {
      sparkle: {
        left: {},
        right: {}
      },

      clover: {
        left: {},
        right: {}
      },

      heart: {
        left: {},
        right: {}
      }
    }
  }
};


/*
 * 공통 좌표에 캐릭터별 보정값을 합칩니다.
 *
 * 캐릭터별 설정에 없는 값은
 * 공통 좌표를 그대로 사용합니다.
 */
function mergeAccessoryLayout(
  commonLayout,
  customLayout
) {
  return {
    ...commonLayout,
    ...(customLayout || {})
  };
}


/*
 * 현재 캐릭터와 현재 선택 액세서리에 맞는
 * 실제 미리보기 좌표를 반환합니다.
 */
function getCurrentAccessoryPreviewLayout() {
  const commonLayout =
    accessoryPreviewLayout.common;

  const characterLayout =
    accessoryPreviewLayout[
      selectedCharacterId
    ] || {};

  const headLayout =
    characterLayout.head || {};

  const faceLayout =
    characterLayout.face || {};

  const effectLayout =
    characterLayout.effect || {};

  const selectedEffectLayout =
    effectLayout[
      selectedEffectAccessoryId
    ] || {};

  return {
    head: mergeAccessoryLayout(
      commonLayout.head,
      headLayout[
        selectedHeadAccessoryId
      ]
    ),

    face: mergeAccessoryLayout(
      commonLayout.face,
      faceLayout[
        selectedFaceAccessoryId
      ]
    ),

    effectLeft:
      mergeAccessoryLayout(
        commonLayout.effectLeft,
        selectedEffectLayout.left
      ),

    effectRight:
      mergeAccessoryLayout(
        commonLayout.effectRight,
        selectedEffectLayout.right
      )
  };
}

/*
 * 지정한 캐릭터와 액세서리에 맞는
 * 좌표를 반환합니다.
 *
 * 출고 처리 화면에서도
 * 설정 화면에서 완료한 좌표를
 * 그대로 재사용합니다.
 */
function getAccessoryLayoutBySelection(
  characterId,
  headAccessoryId,
  faceAccessoryId,
  effectAccessoryId
) {
  const commonLayout =
    accessoryPreviewLayout.common;

  const characterLayout =
    accessoryPreviewLayout[
      characterId
    ] || {};

  const headLayout =
    characterLayout.head || {};

  const faceLayout =
    characterLayout.face || {};

  const effectLayout =
    characterLayout.effect || {};

  const selectedEffectLayout =
    effectLayout[
      effectAccessoryId
    ] || {};

  return {
    head: mergeAccessoryLayout(
      commonLayout.head,
      headLayout[
        headAccessoryId
      ]
    ),

    face: mergeAccessoryLayout(
      commonLayout.face,
      faceLayout[
        faceAccessoryId
      ]
    ),

    effectLeft:
      mergeAccessoryLayout(
        commonLayout.effectLeft,
        selectedEffectLayout.left
      ),

    effectRight:
      mergeAccessoryLayout(
        commonLayout.effectRight,
        selectedEffectLayout.right
      )
  };
}

/*
 * 이미지 요소에 위치와 크기를 적용합니다.
 */
function applyImageLayout(
  imageElement,
  layout
) {
  imageElement.style.left =
    layout.left + "%";

  imageElement.style.top =
    layout.top + "%";

  imageElement.style.width =
    layout.width + "%";

  imageElement.style.height =
    "auto";

  imageElement.style.transform =
    "translateX(-50%) " +
    "translate(" +
    layout.x +
    "px, " +
    layout.y +
    "px)";
}

/*
 * 출고 처리 화면에서만 사용하는
 * 캐릭터 및 액세서리 전체 이동값입니다.
 *
 * 설정 화면의 좌표는 변경하지 않습니다.
 *
 * x가 음수면 왼쪽,
 * x가 양수면 오른쪽입니다.
 *
 * y가 음수면 위쪽,
 * y가 양수면 아래쪽입니다.
 */
const SHIPPING_PREVIEW_OFFSET = {
  x: -80,
  y: 3,
};


/*
 * 기존 좌표에 출고 화면 전용
 * 공통 이동값을 더합니다.
 */
function addShippingPreviewOffset(
  layout
) {
  return {
    ...layout,

    x:
      Number(layout.x || 0) +
      SHIPPING_PREVIEW_OFFSET.x,

    y:
      Number(layout.y || 0) +
      SHIPPING_PREVIEW_OFFSET.y
  };
}

/*
 * 출고 처리 화면에
 * 저장된 캐릭터와 액세서리 좌표를 적용합니다.
 */
function applyShippingWorkerLayout(
  savedSettings
) {
  const characterLayout =
    previewLayout[
      savedSettings.characterId
    ] ||
    previewLayout.dolphin;

  const accessoryLayout =
    getAccessoryLayoutBySelection(
      savedSettings.characterId,
      savedSettings.headAccessoryId,
      savedSettings.faceAccessoryId,
      savedSettings.effectAccessoryId
    );

  applyImageLayout(
    shippingCharacter,
    addShippingPreviewOffset(
      characterLayout
    )
  );

  applyImageLayout(
    shippingHead,
    addShippingPreviewOffset(
      accessoryLayout.head
    )
  );

  applyImageLayout(
    shippingFace,
    addShippingPreviewOffset(
      accessoryLayout.face
    )
  );

  applyImageLayout(
    shippingEffectLeft,
    addShippingPreviewOffset(
      accessoryLayout.effectLeft
    )
  );

  applyImageLayout(
    shippingEffectRight,
    addShippingPreviewOffset(
      accessoryLayout.effectRight
    )
  );
}

/*
 * 선택한 캐릭터에 맞춰
 * 액세서리 미리보기의 위치와 크기를 적용합니다.
 */
function applyAccessoryPreviewLayout() {
  const currentLayout =
    getCurrentAccessoryPreviewLayout();

  const previewItems = [
    {
      image: previewHead,
      layout:
        currentLayout.head
    },
    {
      image: previewFace,
      layout:
        currentLayout.face
    },
    {
      image: previewEffect,
      layout:
        currentLayout.effectLeft
    },
    {
      image: previewEffectRight,
      layout:
        currentLayout.effectRight
    }
  ];

  previewItems.forEach(
    function (previewItem) {
      const image =
        previewItem.image;

      const layout =
        previewItem.layout;

      image.style.left =
        layout.left + "%";

      image.style.top =
        layout.top + "%";

      image.style.width =
        layout.width + "%";

      image.style.height =
        "auto";

      image.style.transform =
        "translateX(-50%) " +
        "translate(" +
        layout.x +
        "px, " +
        layout.y +
        "px)";
    }
  );
}


/*
 * 선택한 캐릭터를
 * 미리보기 화면에 표시합니다.
 */
function showCharacterPreview(
  character
) {
  previewCharacter.src =
    getCharacterImagePath(
      character.file
    );

  previewCharacter.alt =
    character.name +
    " 캐릭터 미리보기";

  const layout =
    previewLayout[
      character.id
    ] || {
      left: 50,
      top: 15.2,
      width: 31,
      x: 0,
      y: 0
    };

  previewCharacter.style.left =
    layout.left + "%";

  previewCharacter.style.top =
    layout.top + "%";

  previewCharacter.style.width =
    layout.width + "%";

  previewCharacter.style.height =
    "auto";

  previewCharacter.style.transform =
    "translateX(-50%) translate(" +
    layout.x +
    "px, " +
    layout.y +
    "px)";
}

/*
 * 선택한 액세서리를
 * 미리보기 이미지에 표시합니다.
 */
function showAccessoryPreview(
  previewImage,
  category,
  accessory
) {
  /*
   * 주변효과는 같은 이미지를
   * 캐릭터 양쪽에 표시합니다.
   */
  if (category === "effect") {
    if (!accessory) {
      previewEffect.hidden =
        true;

      previewEffectRight.hidden =
        true;

      previewEffect.src =
        "";

      previewEffectRight.src =
        "";

      previewEffect.alt =
        "";

      previewEffectRight.alt =
        "";

      return;
    }

    const effectImagePath =
      getAccessoryImagePath(
        category,
        accessory.file
      );

    previewEffect.src =
      effectImagePath;

    previewEffectRight.src =
      effectImagePath;

    previewEffect.alt =
      accessory.name +
      " 왼쪽 미리보기";

    previewEffectRight.alt =
      accessory.name +
      " 오른쪽 미리보기";

    applyAccessoryPreviewLayout();

    previewEffect.hidden =
      false;

    previewEffectRight.hidden =
      false;

    return;
  }

  /*
   * 머리와 얼굴 액세서리는
   * 기존처럼 한 개만 표시합니다.
   */
  if (!accessory) {
    previewImage.hidden =
      true;

    previewImage.src =
      "";

    previewImage.alt =
      "";

    return;
  }

  previewImage.src =
    getAccessoryImagePath(
      category,
      accessory.file
    );

  previewImage.alt =
    accessory.name +
    " 미리보기";

  applyAccessoryPreviewLayout();

  previewImage.hidden =
    false;
}


/*
 * 현재 선택된 액세서리 버튼의
 * 테두리 상태를 변경합니다.
 */
function updateSelectedAccessoryButtons(
  grid,
  selectedAccessoryId
) {
  const buttons =
    grid.querySelectorAll(
      ".accessory-button"
    );

  buttons.forEach(
    function (button) {
      const isSelected =
        button.dataset.accessoryId ===
        selectedAccessoryId;

      button.classList.toggle(
        "selected",
        isSelected
      );

      button.setAttribute(
        "aria-pressed",
        String(isSelected)
      );
    }
  );
}


/*
 * 액세서리 선택 버튼을 자동으로 만듭니다.
 *
 * 같은 액세서리를 다시 누르면
 * 선택이 해제됩니다.
 */
function createAccessoryButtons(
  grid,
  accessories,
  category
) {
  grid.innerHTML = "";

  accessories.forEach(
    function (accessory) {
      const button =
        document.createElement(
          "button"
        );

      button.type = "button";
      button.className =
        "accessory-button";

      button.dataset.accessoryId =
        accessory.id;

      button.setAttribute(
        "aria-label",
        accessory.name +
        " 선택"
      );

      button.setAttribute(
        "aria-pressed",
        "false"
      );

      const image =
        document.createElement(
          "img"
        );

      image.src =
        getAccessoryImagePath(
          category,
          accessory.file
        );

      image.alt =
        accessory.name;

      button.appendChild(
        image
      );

      button.addEventListener(
        "click",
        function () {
          if (category === "head") {
            if (
              selectedHeadAccessoryId ===
              accessory.id
            ) {
              selectedHeadAccessoryId =
                "";

              showAccessoryPreview(
                previewHead,
                "head",
                null
              );

            } else {
              selectedHeadAccessoryId =
                accessory.id;

              showAccessoryPreview(
                previewHead,
                "head",
                accessory
              );
            }

            savePreviewSelection();

            updateSelectedAccessoryButtons(
              headAccessoryGrid,
              selectedHeadAccessoryId
            );

            return;
          }

          if (category === "face") {
            if (
              selectedFaceAccessoryId ===
              accessory.id
            ) {
              selectedFaceAccessoryId =
                "";

              showAccessoryPreview(
                previewFace,
                "face",
                null
              );

            } else {
              selectedFaceAccessoryId =
                accessory.id;

              showAccessoryPreview(
                previewFace,
                "face",
                accessory
              );
            }

            savePreviewSelection();

            updateSelectedAccessoryButtons(
              faceAccessoryGrid,
              selectedFaceAccessoryId
            );

            return;
          }

          if (category === "effect") {
            if (
              selectedEffectAccessoryId ===
              accessory.id
            ) {
              selectedEffectAccessoryId =
                "";

              showAccessoryPreview(
                previewEffect,
                "effect",
                null
              );

            } else {
              selectedEffectAccessoryId =
                accessory.id;

              showAccessoryPreview(
                previewEffect,
                "effect",
                accessory
              );
            }
            savePreviewSelection();

            updateSelectedAccessoryButtons(
              effectAccessoryGrid,
              selectedEffectAccessoryId
            );

          }
        }
      );

      grid.appendChild(
        button
      );
    }
  );
}

/*
 * 현재 선택된 캐릭터 버튼의
 * 표시 상태를 변경합니다.
 */
function updateSelectedCharacterButton() {
  const buttons =
    characterGrid.querySelectorAll(
      ".character-button"
    );

  buttons.forEach(
    function (button) {
      const isSelected =
        button.dataset.characterId ===
        selectedCharacterId;

      button.classList.toggle(
        "selected",
        isSelected
      );

      button.setAttribute(
        "aria-pressed",
        String(isSelected)
      );
    }
  );
}


/*
 * 메인 캐릭터 선택 버튼 10개를
 * 자동으로 생성합니다.
 */
function createCharacterButtons() {
  characterGrid.innerHTML = "";

  characters.forEach(
    function (character) {
      const button =
        document.createElement(
          "button"
        );

      button.type = "button";

      button.className =
        "character-button";

      button.dataset.characterId =
        character.id;

      button.setAttribute(
        "aria-label",
        character.name +
        " 선택"
      );

      button.setAttribute(
        "aria-pressed",
        "false"
      );

      const image =
        document.createElement(
          "img"
        );

      image.src =
        getCharacterImagePath(
          character.file
        );

      image.alt =
        character.name;

      button.appendChild(
        image
      );

      button.addEventListener(
        "click",
        function () {
          selectedCharacterId =
            character.id;

          savePreviewSelection();

          showCharacterPreview(
            character
          );

          applyAccessoryPreviewLayout();

          updateSelectedCharacterButton();
        }
      );

      characterGrid.appendChild(
        button
      );
    }
  );

  updateSelectedCharacterButton();
}

/*
 * 페이지가 새로고침되었을 때
 * 마지막으로 선택한 캐릭터와 액세서리를
 * 미리보기 화면에 다시 표시합니다.
 */
function restorePreviewSelection() {
  let selectedCharacter =
    findItemById(
      characters,
      selectedCharacterId
    );

  /*
   * 저장된 캐릭터 ID가 잘못되었을 경우
   * 기본 돌고래로 돌아갑니다.
   */
  if (!selectedCharacter) {
    selectedCharacterId =
      "dolphin";

    selectedCharacter =
      findItemById(
        characters,
        selectedCharacterId
      );
  }

  const selectedHeadAccessory =
    findItemById(
      headAccessories,
      selectedHeadAccessoryId
    );

  const selectedFaceAccessory =
    findItemById(
      faceAccessories,
      selectedFaceAccessoryId
    );

  const selectedEffectAccessory =
    findItemById(
      effectAccessories,
      selectedEffectAccessoryId
    );

  showCharacterPreview(
    selectedCharacter
  );

  showAccessoryPreview(
    previewHead,
    "head",
    selectedHeadAccessory
  );

  showAccessoryPreview(
    previewFace,
    "face",
    selectedFaceAccessory
  );

  showAccessoryPreview(
    previewEffect,
    "effect",
    selectedEffectAccessory
  );

  applyAccessoryPreviewLayout();

  updateSelectedCharacterButton();

  updateSelectedAccessoryButtons(
    headAccessoryGrid,
    selectedHeadAccessoryId
  );

  updateSelectedAccessoryButtons(
    faceAccessoryGrid,
    selectedFaceAccessoryId
  );

  updateSelectedAccessoryButtons(
    effectAccessoryGrid,
    selectedEffectAccessoryId
  );

  savePreviewSelection();
}

/*
 * 저장하기 버튼을 누르면
 * 출고자 설정을 LocalStorage에 저장한 뒤
 * 출고 처리 화면으로 전환합니다.
 */
saveButton.addEventListener(
  "click",
  function () {
    const saveSucceeded =
      saveShippingWorkerSettings();

    if (!saveSucceeded) {
      return;
    }

    const displaySucceeded =
      showShippingWorkerScreen();

    if (!displaySucceeded) {
      return;
    }

    showShippingScreen();
  }
);


/*
 * 앱 화면이 열리면
 * 캐릭터 버튼을 생성합니다.
 */
createCharacterButtons();

createAccessoryButtons(
  headAccessoryGrid,
  headAccessories,
  "head"
);

createAccessoryButtons(
  faceAccessoryGrid,
  faceAccessories,
  "face"
);

createAccessoryButtons(
  effectAccessoryGrid,
  effectAccessories,
  "effect"
);

restorePreviewSelection();

restoreShippingWorkerSettings();

restoreCurrentScreen();


/*
 * 출고자 변경 버튼
 */
changeWorkerButton.addEventListener(
  "click",
  function () {

    stopQrCamera();

    showSetupScreen();

  }
);
