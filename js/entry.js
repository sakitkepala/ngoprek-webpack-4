import info from "./info.json";

/**
 * Semua yang perlu dioutputkan Webpack ke direktori distribution (dist),
 * perlu di import di entrypoint ini.
 * 
 * Kalau enggak diimport, asset-nya enggak diproses oleh Webpack &
 * enggak dioutputkan. Assetnya jadi hilang (missing).
 */
import $ from "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../image/webpack-logo.png";

import "../css/style.css";

$("#logo").attr("src", info.logo);
$("#title").text(info.title);
