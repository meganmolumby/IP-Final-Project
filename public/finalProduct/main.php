<?php
    $selected = $_GET["splitType"];

    if ($selected === "fullBody") {
        include "fullBody.php";
    }
    else if ($selected === "upperLower") {
        include "upperLower.php";
    }
    else if ($selected === "pushPullLower") {
        include "pushPullLower.php";
    }
    else {
        print("<p>Invalid Split</p>");
    }
 ?>
