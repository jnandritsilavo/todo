<?php
$filename = 'data.json';

$tasks = file_exists($filename) ? json_decode(file_get_contents($filename), true) : [];

$tasks = array_filter($tasks, function ($task) {
    return $task['id'] !== $_POST['id'];
});

file_put_contents($filename, json_encode(array_values($tasks)));

echo json_encode(['success' => true]);
