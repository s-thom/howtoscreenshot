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

function userAgentDetectDevice() {
  // if the userAgent contains "Windows"
  if (navigator.userAgent.indexOf("Windows") !== -1) {
    return "Windows";
  }
  // if the userAgent contains "Macintosh"
  if (navigator.userAgent.indexOf("Macintosh") !== -1) {
    return "macOS";
  }
  // if the userAgent contains "Linux"
  if (navigator.userAgent.indexOf("Linux") !== -1) {
    return "Linux";
  }
  // if the userAgent contains "Android"
  if (navigator.userAgent.indexOf("Android") !== -1) {
    return "Android";
  }
  // if the userAgent contains "iPhone" or "iPad" or "iPod"
  if (
    navigator.userAgent.indexOf("iPhone") !== -1 ||
    navigator.userAgent.indexOf("iPad") !== -1 ||
    navigator.userAgent.indexOf("iPod") !== -1
  ) {
    return "iOS";
  }

  console.log("navigator.userAgent didn't return a supported value");
  return "";
}

function detectDevice() {
  // if navigator.userAgentData is not supported
  if (!(navigator.userAgentData && navigator.userAgentData.platform)) {
    return userAgentDetectDevice();
  }
  switch (navigator.userAgentData.platform) {
    // try to detect using navigator.userAgentData.platform
    // windows
    case "Windows":
      // Windows-specific code here
      return "Windows";
    // macOS
    case "MacIntel":
      // macOS-specific code here
      return "macOS";
    // linux
    case "Linux x86_64":
      // Linux-specific code here
      return "Linux";
    // android
    case "Android":
      // Android-specific code here
      return "Android";
    // ios
    case "iPhone":
    case "iPad":
    case "iPod":
      // iOS-specific code here
      return "iOS";

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
    // Get detectDeviceMessage element
    const detectDeviceMessage = document.getElementById("detectDeviceMessage");
    // Set detectDeviceMessage element text
    detectDeviceMessage.textContent = "You are using " + device;
  }
}
