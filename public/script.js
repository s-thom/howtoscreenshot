/* eslint-env browser */
/* eslint-disable
  prefer-arrow-callback,
  prefer-template,
  func-names,
  no-console
*/

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function () {
      console.log("SW registration success");
    })
    .catch(function (err) {
      console.error("SW registration failed");
      console.error(err);
    });
}

const DEVICE_STRINGS = {
  android: "Android",
  chromeos: "ChromeOS",
  ios: "iOS",
  linux: "Linux",
  mac: "Macintosh",
  playstation: "Playstation",
  steam: "Steam",
  switch: "Switch",
  windows: "Windows",
  xbox: "Xbox",
};

/** @returns {keyof typeof DEVICE_STRINGS} */
function userAgentDetectDevice() {
  if (navigator.userAgent.indexOf("Windows") !== -1) {
    return "windows";
  }
  if (navigator.userAgent.indexOf("Macintosh") !== -1) {
    return 'mac';
  }
  if (navigator.userAgent.indexOf("Linux") !== -1) {
    return "linux";
  }
  if (navigator.userAgent.indexOf("Android") !== -1) {
    return "android";
  }
  if (
    navigator.userAgent.indexOf("iPhone") !== -1 ||
    navigator.userAgent.indexOf("iPad") !== -1 ||
    navigator.userAgent.indexOf("iPod") !== -1
  ) {
    return "ios";
  }

  console.log("navigator.userAgent didn't return a supported value");
  return "";
}

/** @returns {keyof typeof DEVICE_STRINGS} */
function detectDevice() {
  // if navigator.userAgentData is not supported
  if (!(navigator.userAgentData && navigator.userAgentData.platform)) {
    return userAgentDetectDevice();
  }
  switch (navigator.userAgentData.platform) {
    // try to detect using navigator.userAgentData.platform
    case "Windows":
      return "windows";
    case "MacIntel":
      return "mac";
    case "Linux x86_64":
      return "linux";
    case "Android":
      return "android";
    case "iPhone":
    case "iPad":
    case "iPod":
      return "ios";

    default:
      console.log(
        "navigator.userAgentData.platform didn't return a supported value",
      );
      return userAgentDetectDevice();
  }
}

// if detectDeviceMessage element exists
if (document.getElementById("detectDeviceMessage")) {
  // Detect device
  const device = detectDevice();
  if (device === "") {
    console.log("detectDevice() returned an empty string");
  } else {
    const detectDeviceMessage = document.getElementById("detectDeviceMessage");

    // Clear children
    detectDeviceMessage.textContent = "";

    detectDeviceMessage.appendChild(document.createTextNode("You are using "));

    const deviceLink = document.createElement("a");
    deviceLink.classList.add('keep-underline')
    deviceLink.href = "/" + device;
    deviceLink.textContent = DEVICE_STRINGS[device];
    detectDeviceMessage.appendChild(deviceLink);

    detectDeviceMessage.appendChild(document.createTextNode("."));
  }
}
