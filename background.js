CONVERT_TO_LANG = null

chrome.contextMenus.onClicked.addListener(function(info, tab){
  chrome.tabs.executeScript(tab.id, {code: `var CONVERT_TO_LANG = '${CONVERT_TO_LANG}'`}, function() {
        chrome.tabs.executeScript(tab.id, {file: 'translate.js'});
    })
});

chrome.contextMenus.removeAll();
chrome.contextMenus.create({
      title: "Romanji Convert To",
      id: "parent",
      contexts: ["selection"],

});

chrome.contextMenus.create({
      title: "Hiragana",
      parentId: "parent",
      contexts: ["selection"],
      onclick: function(){
        CONVERT_TO_LANG = 'Hiragana'
      }
});

chrome.contextMenus.create({
      title: "Katakana",
      parentId: "parent",
      contexts: ["selection"],
      onclick: function(){
        CONVERT_TO_LANG = 'Katakana'
      }
});
