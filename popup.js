$(document).ready(function(){
    // ページロードの度にbackgroundに状態を確認
    chrome.runtime.sendMessage(
        { cmd: "isTranslate" },
        function(isTranslate) {
            if (isTranslate) {
                console.log('thai duong test')
                // var r = document.documentElement.innerHTML.replace(/spec-R/g, "SPEC-R");
                // document.documentElement.innerHTML = r;
            }
        }
    );
});


// function onWindowLoad() {
//   chrome.tabs.executeScript(null,
// 	  {
// 		file: "fillForm.js"
// 	  }, function() {}
//   );
// }
//
// window.onload = onWindowLoad;