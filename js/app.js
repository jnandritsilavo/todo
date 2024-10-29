/****************************************************************
       _                    _   _            _           _       
      | |                  | \ | |          (_)         | |      
      | | ___  __ _ _ __   |  \| | __ _ _ __ ___   _____| | ___  
  _   | |/ _ \/ _` | '_ \  | . ` |/ _` | '__| \ \ / / _ \ |/ _ \ 
 | |__| |  __/ (_| | | | | | |\  | (_| | |  | |\ V /  __/ | (_) |
  \____/ \___|\__,_|_| |_| |_| \_|\__,_|_|  |_| \_/ \___|_|\___/ 
****************************************************************/
$(document).ready(function () {
    // Charger les tâches au démarrage
    loadTasks();

    // Ajouter une tâche
    $('#add-task').click(function () {
        const task = $('#task-input').val().trim();
        if (task) {
            addTask(task);
            $('#task-input').val(''); // Effacer l'input après ajout
        }
    });

    // Terminer une tâche
    $(document).on('click', '.complete-btn', function () {
        const taskId = $(this).closest('li').data('id');
        completeTask(taskId);
    });

    // Supprimer une tâche
    $(document).on('click', '.delete-btn', function () {
        const taskId = $(this).closest('li').data('id');
        deleteTask(taskId);
    });

    // Charger les tâches depuis data.json
    function loadTasks() {
        $.getJSON('load_tasks.php', function (data) {
            $('#incomplete-tasks').empty();
            $('#complete-tasks').empty();
            $.each(data, function (key, task) {
                if (task.completed) {
                    $('#complete-tasks').append(createTaskElement(task, true));
                } else {
                    $('#incomplete-tasks').append(createTaskElement(task, false));
                }
            });
        });
    }

    // Ajouter une tâche à data.json
    function addTask(task) {
        $.post('add_task.php', { task: task }, function () {
            loadTasks();
        });
    }

    // Terminer une tâche
    function completeTask(taskId) {
        $.post('complete_task.php', { id: taskId }, function () {
            loadTasks();
        });
    }

    // Supprimer une tâche
    function deleteTask(taskId) {
        $.post('delete_task.php', { id: taskId }, function () {
            loadTasks();
        });
    }

    // Créer l'élément HTML pour une tâche
    function createTaskElement(task, isCompleted) {
        const listItem = $('<li>').addClass('list-group-item d-flex justify-content-between align-items-center').attr('data-id', task.id).text(task.text);

        // Si la tâche n'est pas terminée, afficher le bouton "Terminer"
        if (!isCompleted) {
            const completeBtn = $('<button>').addClass('btn btn-success complete-btn').text('Terminer');
            listItem.append(completeBtn);
        }

        // Afficher le bouton "Supprimer" dans tous les cas
        const deleteBtn = $('<button>').addClass('btn btn-danger delete-btn').text('Supprimer');
        listItem.append(deleteBtn);

        return listItem;
    }
});
