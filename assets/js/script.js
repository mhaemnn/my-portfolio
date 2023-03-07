$(document).ready(function () {
  // sidenav
  $(".sidenav").sidenav();

  // tabs navbar
  $(".tabs").tabs();

  // gird/photo
  $(".materialboxed").materialbox();

  // parallax
  $(".parallax").parallax();

  //datepicker
  $(".datepicker").datepicker({
    disableWeekends: true,
  });

  // tooltipped
  $(".tooltipped").tooltipped();
});

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
