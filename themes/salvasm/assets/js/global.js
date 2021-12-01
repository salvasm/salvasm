$(function () {
  var $infos = $(".ssm-cv-info");
  $.each($infos, function () {
    var elem = "#" + this.id;
    $(elem).dialog({
      autoOpen: false,
      closeOnEscape: true,
      closeText: "",
      height: 300,
      width: 400,
      fluid: true,
    });
  });

  $(".ssm-cv-info-btn").on("click", function () {
    var elem = "#" + $(this).data("id");
    console.log(elem);
    $(elem).dialog("open");
  });
});
