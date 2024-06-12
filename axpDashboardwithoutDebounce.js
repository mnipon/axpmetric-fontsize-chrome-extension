// Function to change font size
function changeAXPFontSize() {
  // Find all element "metric" class
  const metricElements = document.querySelectorAll(".metric");
  metricElements.forEach(function (element) {
    element.style.fontSize = "2.5vw";
  });

  // Find all element "metric__label" class
  const metricLabelElements = document.querySelectorAll(".metric__label");
  metricLabelElements.forEach(function (element) {
    element.style.fontSize = "small";
  });
}

// Initial call in case elements are already loaded
changeAXPFontSize();

// Create a MutationObserver to watch for changes in the DOM
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === "childList" || mutation.type === "subtree") {
      console.log("Apply new fonts");
      changeAXPFontSize();
    }
  });
});

// Configuration of the observer
var config = { childList: true, subtree: true };

// Start observing the body for changes
observer.observe(document.body, config);
