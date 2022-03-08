$(document).ready(function () {
  $(".desplegablesFaqs").click(function () {
    $(this).children(":last").fadeToggle();
  });
});
