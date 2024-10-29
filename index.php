<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestionnaire de Tâches</title>
    <link href="./css/bootstrap.min.css" rel="stylesheet">
    <link href="./css/style.css" rel="stylesheet">
    <script src="./js/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4">GESTIONNAIRE DE TÂCHES</h1>
        
        <div class="input-group mb-4">
            <input type="text" id="task-input" class="form-control" placeholder="Nouvelle tâche" aria-label="Nouvelle tâche">
            <button class="btn btn-primary" id="add-task">Ajouter</button>
        </div>

        <div>
            <h3 class="mb-3">Tâches en cours</h3>
            <ul id="incomplete-tasks" class="list-group mb-4">
                <!-- Tâches en cours -->
            </ul>

            <h3 class="mb-3">Tâches terminées</h3>
            <ul id="complete-tasks" class="list-group">
                <!-- Tâches terminées -->
            </ul>
        </div>
    </div>

    <script src="./js/app.js?<?= date('hmi')?>"></script>
</body>
</html>
