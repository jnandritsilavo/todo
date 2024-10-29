<?php
$filename = 'data.json';

$tasks = file_exists($filename) ? json_decode(file_get_contents($filename), true) : [];

foreach ($tasks as &$task) {
    if ($task['id'] === $_POST['id']) {
        $task['completed'] = true;
        break;
    }
}

file_put_contents($filename, json_encode($tasks));

echo json_encode(['success' => true]);
