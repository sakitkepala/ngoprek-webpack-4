import info from "./info.json";
import $ from "jquery";

import "../image/image.jpg";

$("#img").attr("src", info.image);
$(".card-title").text(info.city);
$(".card-text").text(info.description);

$("#video_btn").click(function () {
  if (!$("#video").length) {
    import(/* webpackChunkName: "videoFunc" */ "./video")
      .then(function (module) {
        module.default();
      })
      .catch(function (e) {
        console.log(e);
      });
  }
});
