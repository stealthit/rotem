$(function () {
  
  $("button.date-btn").on("click", function () {
    $(".calender").removeClass("active");
    $(this).parent(".form-input-group").find(".calender").addClass("active");
  });

  $(".calender > .day > .col").on("click", function () {
    if ($(this).hasClass("disabled")) {
      return false;
    } else if ($(this).hasClass("today")) {
    } else {
      $(this).parents(".calender").find(".col").removeClass("select");
      $(this).addClass("select");
      $(this).parents(".calender").removeClass("active");
    }
  });
});
