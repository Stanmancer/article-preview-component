"use strict";

const shareButton = document.getElementById("share-button");
const shareBox = document.getElementById("share-box");

shareButton.addEventListener("click", function () {
  shareBox.classList.toggle("shown");

  if (!shareBox.classList.contains("shown")) {
    shareButton.classList.remove("open-icon");
    shareButton.src = "/images/icon-share.svg";
  } else {
    shareButton.classList.add("open-icon");
    shareButton.src = "/images/icon-share-light.svg";
  }
});
