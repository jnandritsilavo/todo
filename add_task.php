<?php
$filename = 'data.json';

// Lire le fichier JSON
$tasks = file_exists($filename) ? json_decode(file_get_contents($filename), true) : [];

// Créer une nouvelle tâche
$newTask = [
    'id' => uniqid(),
    'text' => $_POST['task'],
    'completed' => false
];

// Ajouter la tâche au tableau
$tasks[] = $newTask;

// Sauvegarder dans le fichier
file_put_contents($filename, json_encode($tasks));

echo json_encode(['success' => true]);