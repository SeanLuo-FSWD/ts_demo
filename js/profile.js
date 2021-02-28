$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);

  const myParam = urlParams.get("from");
  console.log(myParam);

  if (myParam == "post") {
    $(".selfies").prepend(`           <a href="index.html">
      <img class="back_arrow" src="./assets/icons/back_arrow.png"></img></a>`);

    $(".chat_button").append(`      <a href="chat.html?from=post">
        <i class="fas fa-comment-dots"></i>
        <p>Message</p>
      </a>`);
  } else {
    $(".selfies").prepend(`           <a href="grid.html">
      <img class="back_arrow" src="./assets/icons/back_arrow.png"></img></a>`);

    $(".chat_button").append(`      <a href="chat.html?from=grid">
        <i class="fas fa-comment-dots"></i>
        <p>Message</p>
      </a>`);
  }
});
