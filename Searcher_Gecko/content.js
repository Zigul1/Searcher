// Get selected text
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getSelectedText") {
        const selectedText = window.getSelection().toString();
        sendResponse({ selectedText: selectedText });
    }
});

// Reading clipboard
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "readClipboard") {
        navigator.clipboard.readText()
            .then(text => {
                sendResponse({ text });
            })
    }
	return true;
});