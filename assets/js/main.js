"use strict";

/*
 *  Toggle - Tabs
 */
const tabLink = document.querySelectorAll(".link-element");
const tabContent = document.querySelectorAll(".tab-content");

tabLink.forEach((element, i) => {
  tabLink[i].addEventListener("click", () => {
    tabLink.forEach((element, i) => {
      tabLink[i].classList.remove("active");
      tabContent[i].classList.remove("active");
    });

    tabLink[i].classList.add("active");
    tabContent[i].classList.add("active");
  });
});
