$(document).ready(function () {
  // tabs navbar
  $(".tabs").tabs();

  // slider
  $(".slider").slider();

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

const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  indicator: false,
});
