$("t-overview").on("mouseenter", function (e) {
  if (e.target.matches("t-overview")) {
    if (!$($(e.target).prev().get(0)).is("h4")) {
      let seccion = document.createElement("h4");
      seccion.className = "seccion";
      seccion.textContent = e.target.parentNode.id.toUpperCase();
      $(e.target).before(seccion);
    }
  }
});

$("t-overview").on("mouseout", function (e) {
  if (e.target.matches("t-overview")) {
    $(e.target)
      .prev(".seccion")
      .removeClass("seccion")
      .addClass("desaparecer")
      .fadeOut()
      .promise()
      .then(() => {
        $(this).prev(".desaparecer").remove();
      });
  }
});
