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
  return ""
}

function detectDevice(){
  // try to detect using navigator.userAgentData.platform
  try{
    // windows
    if(navigator.userAgentData.platform === "Windows"){
      return "Windows"
    }
    // macOS
    else if(navigator.userAgentData.platform === "MacIntel"){
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
  }catch(e){
    console.log("navigator.userAgentData.platform not supported")
    return userAgentDetectDevice()
  }
}

// if detectDeviceMessage element exists
if (document.getElementById("detectDeviceMessage")) {
  // Detect device
  const device = detectDevice();
  if(device === ""){
    console.log("detectDevice() retruned an empty string")
  }else{
    // Get detectDeviceMessage element
    const detectDeviceMessage = document.getElementById("detectDeviceMessage");
    // Set detectDeviceMessage element text
    detectDeviceMessage.textContent = "You are using " + device;
  }
}