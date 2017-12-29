<?php
$current = basename($_SERVER['REQUEST_URI']);
$current = explode('?', $current);
$current = $current['0'];
