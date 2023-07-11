// document.addEventListener('DOMContentLoaded', function() {
//   var executeButton = document.getElementById('executeButton');
//   executeButton.addEventListener('click', function() {
//     chrome.tabs.executeScript({ file: 'content.js' });
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  var executeButton = document.getElementById('executeButton');
  executeButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.executeScript(activeTab.id, { file: 'findUnfollowers.js' });
    });
  });
});