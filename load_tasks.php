<?php
$filename = 'data.json';

if (file_exists($filename)) {
    $tasks = file_get_contents($filename);
    echo $tasks;
} else {
    echo json_encode([]);
}
