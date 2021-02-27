function generate_users() {
  let grid_string = "";

  for (let i = 0; i < 20; i++) {
    let card = `

            <div class="profile_card ">
                <a href="profile.html">
                <img src="./assets/avatars/${Math.floor(
                  Math.random() * Math.floor(4)
                )}.png" alt="">
                <p class="user_name">username ${i}</p>
                </a>
            </div>       

        `;

    grid_string += card;
  }

  return grid_string;
}

$(document).ready(function () {
  $(".content_wrapper").append(generate_users());

  $(".profile_card").on("click", () => {
    profile_img_src = $(this).find("img").attr("src");
    profile_uname = $(this).find("p").text();
    console.log(profile_uname);
  });
});
