chrome.browserAction.onClicked.addListener(function(tab) {
    // Open current tab URL in incognito window
    chrome.windows.create({'url': tab.url, 'incognito': true});
  
    // Note: Directly deleting specific tab history is not supported by Chrome's API.
    // Users are encouraged to manually manage their history if needed.
  });