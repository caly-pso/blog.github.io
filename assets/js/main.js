!(function ($) {
  ("use strict");

  // filter
  $(window).on("load", function () {
    var blogIsotope = $(".blog-container").isotope({
      itemSelector: ".blog-item",
      layoutMode: "fitRows",
    });

    $("#blog-fltrs li").on("click", function () {
      $("#blog-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      blogIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });
  });
})(jQuery);

// search https://vestride.github.io/Shuffle/
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
