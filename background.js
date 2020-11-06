chrome.browserAction.onClicked.addListener(function(activeTab) {
    chrome.tabs.executeScript(activeTab.id, {file: "content.js"});
});