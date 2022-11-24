let share = document.getElementById("arrow");
let bubble = document.getElementById("bubble");

share.addEventListener("click", () => {
  if (getComputedStyle(bubble).display != "flex") {
    bubble.style.display = "flex";
  } else {
    bubble.style.display = "none";
  }
});
