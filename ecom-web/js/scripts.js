document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("exclusivePopup");
  const buyBtn = document.querySelector(".exclusive-buy"); // exclusive wallpaper button
  const closePopup = document.getElementById("closePopup");

  // Show popup
  if (buyBtn) {
    buyBtn.addEventListener("click", () => {
      popup.classList.add("show"); // use CSS class for display
    });
  }

  // Close popup
  if (closePopup) {
    closePopup.addEventListener("click", () => {
      popup.classList.remove("show");
    });
  }

  // Close if clicked outside
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("show");
    }
  });
});



// Open Popup
function openPopup() {
  document.getElementById("popup").classList.add("active");
}

// Close Popup
function closePopup() {
  document.getElementById("popup").classList.remove("active");
}

// Attach Buy Button
document.querySelectorAll(".buy-now").forEach(btn => {
  btn.addEventListener("click", openPopup);
});
