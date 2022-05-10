"use strict";

$(() => {
  // remove lights
  const clearLights = () => {
    $(".light").removeClass("red");
    $(".light").removeClass("yellow");
    $(".light").removeClass("green");
  };

  // red light
  const redLight = () => {
    clearLights();
    $("#stop").addClass("red");
  };

  // yellow light
  const yellowLight = () => {
    clearLights();
    $("#slow").addClass("yellow");
  };

  // green light
  const greenLight = () => {
    clearLights();
    $("#go").addClass("green");
  };

  $("#stop").on("click", redLight);
  $("#slow").on("click", yellowLight);
  $("#go").on("click", greenLight);
});
