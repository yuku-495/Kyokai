// script.js

// 訪問者カウンター
function updateVisitorCount() {
    let count = localStorage.getItem("visitorCount");
    if (!count) {
      count = 1;
    } else {
      count = Number(count) + 1;
    }
    localStorage.setItem("visitorCount", count);
    document.getElementById("visitorNumber").textContent = count;
  }
  
  window.addEventListener("load", updateVisitorCount);
  
