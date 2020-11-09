import info from "./info.json";
import $ from "jquery";

import "../video/video.mp4";

export default function () {
  var video = "<video id='video' controls='controls' src=" + info.video + "/>";
  var banner = "<div class='alert alert-primary' role='alert'>Check Out the Video!</div>";
  $(banner).appendTo("#video_box");
  $(video).appendTo("#video_box");
}
