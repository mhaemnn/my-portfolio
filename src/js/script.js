$(document).ready(function () {
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
    duration: 1000,
    interval: 2000,
  });
});
