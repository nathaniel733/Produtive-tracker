let activeTabId = null;
let startTime = null;
let siteData = {};

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    handleTabChange(tab.url);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        handleTabChange(tab.url);
    }
});

function handleTabChange(url) {
    if (!url) return;

    const domain = new URL(url).hostname;
    if (activeTabId) updateSiteTime();

    activeTabId = domain;
    startTime = Date.now();
}

function updateSiteTime() {
    if (!activeTabId || !startTime) return;

    const elapsedTime = (Date.now() - startTime) / 1000;
    siteData[activeTabId] = (siteData[activeTabId] || 0) + elapsedTime;

    chrome.storage.local.set({ siteData });
}

// Save data when extension is closed
chrome.runtime.onSuspend.addListener(() => {
    updateSiteTime();
});

// ---------------- Tab Manager Functionality ----------------

// Group tabs by category
