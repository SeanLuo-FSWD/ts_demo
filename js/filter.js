$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("from");

  if (myParam == "grid") {
    $(".filter_top").append(`       <a href="grid.html">
            <img class="back_arrow" src="./assets/icons/back_arrow.png"></img></a>`);

    $(".filter_bottom").append(`<a href="grid.html"><h3>Submit</h3></a>`);
  } else {
    $(".filter_top").append(`       <a href="index.html">
            <img class="back_arrow" src="./assets/icons/back_arrow.png"></img></a>`);

    $(".filter_bottom").append(`<a href="index.html"><h3>Submit</h3></a>`);
  }

  $(".f_sec .f_row i").on("click", function () {
    $(this).parent().parent().find(".filter_drop").toggleClass("show");
  });
});
