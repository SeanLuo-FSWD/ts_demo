function update_cmt_n() {
  for (let i = 0; i < $(".post").length; i++) {
    //   const element = $(".post")[i];

    let cmts_on_post = $(`.comments:eq(${i - 1}) .comment`).length;

    $(`.ncomments:eq(${i - 1})`)
      .html(`<span class="cmt_n">${cmts_on_post}</span> Comments &nbsp;<i
                class="fas fa-chevron-down"
              ></i>`);
  }
}

let img_src = "";

function initialize_clicks() {
  $(".ncomments").on("click", function () {
    $(this).closest(".post").find(".comments").toggleClass("visible");
  });

  $(".tocomment").on("click", function () {
    $(this).closest(".post").find(".commenting").toggleClass("visible");
  });

  $(".new_post").on("click", function () {
    $(".create_post").toggleClass("visible");
  });

  $(".tolike.liking").on("click", function () {
    let like_n = parseInt($(this).closest(".post").find(".like_n").text());

    like_n += 1;
    $(this).closest(".post").find(".like_n").text(like_n);
  });

  $(".commenting button").on("click", function () {
    let comment = $(this).closest(".commenting").find("textarea").val();

    const cmt_string = `
        <div class="comment flex">
            <div class="user_icon">
              <img src="./assets/avatars/3.png" alt="" />
            </div>
            <div class="user_content">
              <p class="u_name">your_name</p>
              <p class="u_text">${comment}</p>
            </div>
          </div>
        `;

    $(this).closest(".post").find(".comments").prepend(cmt_string);

    $(this).closest(".commenting").find("textarea").val("");

    update_cmt_n();
  });
}

$(document).ready(function () {
  initialize_clicks();

  update_cmt_n();

  const fileSelector = document.getElementById("myFile");
  fileSelector.addEventListener("change", (event) => {
    imgUploaded = event.target.files;

    img_src = URL.createObjectURL(imgUploaded[0]);
  });

  $(".create_post [type=submit]").on("click", function () {
    let title = $(".create_post [type=text]").val();
    let desc = $(".create_post textarea").val();
    $(".create_post [type=text]").val("");
    $(".create_post textarea").val("");

    let post_string = `
              <div class="post">
        <h2 class="title">${title}</h2>
        <div class="attachment">
          <img src="${img_src}" alt="" />
        </div>
        <div class="desc">
          ${desc}
        </div>

        <div class="likes flex">
          <div class="nlikes">
            <i class="fas fa-thumbs-up"></i>
            <span class="like_n">0</span>
          </div>
          <div class="ncomments clickable"></div>
        </div>

        <div class="comments">

        </div>

        <div class="like_comment">
          <div class="interaction flex">
            <div class="tolike liking clickable">
              <i class="far fa-thumbs-up"></i>
              Like
            </div>
            <div class="tocomment clickable">
              <i class="far fa-comment-alt"></i>
              Comment
            </div>
          </div>
          <div class="commenting">
            <textarea></textarea><button type="submit">Submit</button>
          </div>
        </div>
      </div>
      `;

    $(".post_feed").prepend(post_string);
    update_cmt_n();
    initialize_clicks();
  });
});
