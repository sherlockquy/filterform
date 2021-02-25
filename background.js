// maintaining state in the background
var tabId = null;
// // 状態保持
// var isTranslate = false;
//
// // ボタンが押されたら、状態を入れ替えてリロードする
// chrome.browserAction.onClicked.addListener(function(tab) {
//     isTranslate = !isTranslate;
//
//     // 状態をバッジとして表示する
//     if (isTranslate)
//         chrome.browserAction.setBadgeText({text : "ON" });
//     else
//         chrome.browserAction.setBadgeText({text: ""});
//
//     chrome.tabs.getSelected(null, function(tab) {
//         tabId = tab.id
//     })
//     chrome.tabs.reload(tabId);
// });
//
// // contents_scriptからのメッセージ処理
// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if (isTranslate) {
//             switch (request.cmd) {
//                 case "isTranslate": // 状態の取得
//                     sendResponse(isTranslate);
//                     return;
//                 default:
//                     break;
//             }
//         }
//         sendResponse("");
//     }
// );

// listening for new tabIds and refresh requests
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.tabs.getSelected(null, function(tab) {
            tabId = tab.id
            console.log(tab)
        })
        if(request.type == "refresh") {
            console.log(request)
            console.log(chrome)
            console.log(31312321)
            chrome.tabs.reload(tabId);
        }
    });