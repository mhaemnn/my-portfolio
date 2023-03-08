$(document).ready(function () {
  //datepicker
  $(".datepicker").datepicker({
    disableWeekends: true,
  });

  // tooltipped
  $(".tooltipped").tooltipped();
});

// sidenav
const sidenav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sidenav);

// slider
const slider = $(".slider");
$(document).ready(function () {
  slider.slider({
    indicators: false,
    height: 500,
    duration: 1000,
    interval: 2000,
  });
});

// materialboxe /photo-gird
const materialbox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialbox);

// tabs
const tabs = document.querySelectorAll(".tabs");
M.Tabs.init(tabs);

// parallax
const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);
