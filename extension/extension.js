var SampleExtension = {

    init: function () {
        SampleExtension.addTabUpdatedListener(SampleExtension.getTabAndCheck);
    },

    addTabUpdatedListener: function (callback) {
        chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
            if (changeInfo.status === 'complete')
                callback();
        });
    },

    getTabAndCheck: function () {
        chrome.tabs.query({
            active: true,
            windowId: chrome.windows.WINDOW_ID_CURRENT
        }, function (tab) {
            if (tab[0])
                SampleExtension.startInjection();
        });
    },

    startInjection: function () {
        chrome.tabs.executeScript(null, {
            code: 'console.log("Injecting a heading to window.");'
        }, SampleExtension.inject);
    },

    inject: function () {
        chrome.tabs.executeScript(null, {
            file: 'injector.js'
        });
    }
};

SampleExtension.init();
