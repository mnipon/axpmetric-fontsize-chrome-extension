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

// Debounce function to limit how often changeAXPFontSize is called
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Debounced version of changeAXPFontSize
const debouncedChangeAXPFontSize = debounce(changeAXPFontSize, 900); // Adjust delay as needed but not more than 900 otherwise the change of font size won't work properly.

// Initial call in case elements are already loaded
// changeAXPFontSize();

// Create a MutationObserver to watch for changes in the DOM
var observer = new MutationObserver(function (mutations) {
  let needsUpdate = false;

  // Initially change font size when the element is presented.  Without this changeAXPFontSize(), user will experience the Font bouncing behavior from large to smaller font
  changeAXPFontSize();
  // console.log("Apply Initial new fonts");

  mutations.forEach(function (mutation) {
    if (mutation.type === "childList" || mutation.type === "subtree") {
      needsUpdate = true;
    }
  });

  if (needsUpdate) {
    // console.log("Apply new fonts");
    debouncedChangeAXPFontSize();
  }
});

// Configuration of the observer
var config = { childList: true, subtree: true };

// Start observing the body for changes
observer.observe(document.body, config);
