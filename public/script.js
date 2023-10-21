/* eslint-env browser */
/* eslint-disable
  prefer-arrow-callback,
  prefer-template,
  func-names,
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

function userAgentDetectDevice(){
  // if the userAgent contains "Windows"
  if(navigator.userAgent.indexOf("Windows") !== -1){
    return "Windows"
  }
  // if the userAgent contains "Macintosh"
  else if(navigator.userAgent.indexOf("Macintosh") !== -1){
    return "macOS"
  }
  // if the userAgent contains "Linux"
  else if(navigator.userAgent.indexOf("Linux") !== -1){
    return "Linux"
  }
  // if the userAgent contains "Android"
  else if(navigator.userAgent.indexOf("Android") !== -1){
    return "Android"
  }
  // if the userAgent contains "iPhone" or "iPad" or "iPod"
  else if(navigator.userAgent.indexOf("iPhone") !== -1 || navigator.userAgent.indexOf("iPad") !== -1 || navigator.userAgent.indexOf("iPod") !== -1){
    return "iOS"
  }else{
    console.log("navigator.userAgent didn't return a supported value")
    return ""
  }
}

function detectDevice(){
  // if navigator.userAgentData is not supported
  if (!(navigator.userAgentData && navigator.userAgentData.platform)) {
    return userAgentDetectDevice();
  }else{
    // try to detect using navigator.userAgentData.platform
    // windows
    if(navigator.userAgentData.platform === "Windows"){
      return "Windows"
    }
    // macOS
    else if(navigator.userAgentData.platform === "MacIntel" || navigator.userAgentData.platform === "macOS"){
      return "macOS"
    }
    // linux
    else if(navigator.userAgentData.platform === "Linux x86_64"){
      return "Linux"
    }
    // android
    else if(navigator.userAgentData.platform === "Android"){
      return "Android"
    }
    // ios
    else if(navigator.userAgentData.platform === "iPhone" || navigator.userAgentData.platform === "iPad" || navigator.userAgentData.platform === "iPod"){
      return "iOS"
    }else{
      console.log("navigator.userAgentData.platform didn't return a supported value")
      return userAgentDetectDevice()
    }
  }
}

// if detectDeviceMessage element exists
if (document.getElementById("detectDeviceMessage")) {
  // Detect device
  const device = detectDevice();
  if(device === ""){
    console.log("detectDevice() returned an empty string")
  }else{
    // Get detectDeviceMessage element
    const detectDeviceMessage = document.getElementById("detectDeviceMessage");
    // Set detectDeviceMessage element text
    detectDeviceMessage.textContent = "You are using " + device;
  }
}