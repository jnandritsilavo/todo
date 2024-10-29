# Task Management Application

## Introduction
The task management application is a simple solution for organizing and tracking ongoing and completed tasks. It allows users to add, complete, and delete tasks, with a user-friendly interface based on **Bootstrap 5** and **jQuery**. Task data is stored in a JSON file, making it easy to manage and persist information.

## Technologies Used
1. **HTML**: Structure of the web page.
2. **CSS**: Page styling, based on Bootstrap 5 for a responsive and attractive design.
3. **JavaScript**: Dynamic interactions and task manipulation with jQuery.
4. **PHP**: Server-side processing for task management.
5. **JSON**: Data storage format in the `data.json` file.

## Features
1. **Add a Task**:
   - The user can enter a new task in an input field and click "Add" to save it.
   - The task is added to the JSON file and displayed in the list of ongoing tasks.

2. **Mark a Task as Completed**:
   - The user can click the "Complete" button next to a task to mark it as completed.
   - The task is moved from the ongoing tasks list to the completed tasks list.

3. **Delete a Task**:
   - Users can delete tasks from either the ongoing or completed tasks lists by clicking the "Delete" button.

4. **Dynamic Display**:
   - The task list is dynamically updated after each addition, completion, or deletion.

## Project Structure

### File Structure
- `index.php`: Main page displaying the user interface.
- `style.css`: CSS file for custom styling (optional if using only Bootstrap).
- `app.js`: JavaScript file to manage task interactions.
- `load_tasks.php`: PHP script to load tasks from the JSON file.
- `add_task.php`: PHP script to add a new task to the JSON file.
- `complete_task.php`: PHP script to mark a task as completed.
- `delete_task.php`: PHP script to delete a task from the JSON file.
- `data.json`: JSON file storing task data.

## Deployment Instructions

### Prerequisites
- Web server with PHP
- JSON support for data persistence

### Deployment Steps
1. Ensure the PHP files have the appropriate permissions to read and write to the `data.json` file.
2. Create an empty `data.json` file in the project directory to store tasks.
3. Access `index.php` via a web browser to start using the application.

### Configuration
No specific configuration is required unless you wish to customize the style or features.

## Author
Developed by JEAN NARIVELO.