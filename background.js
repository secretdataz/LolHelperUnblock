chrome.webRequest.onBeforeSendHeaders.addListener(
        function(details) {
          for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === 'User-Agent') {
              details.requestHeaders[i].value = "Mozilla/5.0 (Linux; Android 4.4.4; GT-I9000 Build/KTU84Q) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36;GarenaGas/1.5.5 (samsung GT-I9000; Android 19; en; TH; WebView)";
              break;
            }
          }
          return {requestHeaders: details.requestHeaders};
        },
        {urls: ["*://lolhelperth.garenanow.com/*"]},
        ["blocking", "requestHeaders"]);