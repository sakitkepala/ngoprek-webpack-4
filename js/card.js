import info from "./info.json";
import $ from "jquery";

import "../image/image.jpg";

$("#img").attr("src", info.image);
$(".card-title").text(info.city);
$(".card-text").text(info.description);

import append_video from "./video";
append_video();
