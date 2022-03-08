$(document).ready(function () {
  $("input").focus(function () {
    $(this).css({ background: "lightblue" });
  });
  $("input").blur(function () {
    $(this).css({ background: "white" });
  });
  $("li").mouseover(function () {
    $(this).css({ color: "red" });
  });
  $("li").mouseout(function () {
    $(this).css({ color: "black" });
  });
});
