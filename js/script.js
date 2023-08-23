$(document).ready(function () {
    const taskInput = $("#taskinput");
    const taskList = $('#tasklist');
    const noResultsMessage = $('<li class="no-results">No results found</li>'); // Create the message element

    $("#addButton").on("click", function () {
        const taskText = taskInput.val();
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        const li = `<li>${taskText}</li>`;
        taskList.append(li);
        taskList.show();
        taskInput.val("");
    });

    const searchButton = $('#searchButton');

    searchButton.on("click", function () {
        const searchTerm = taskInput.val().toLowerCase();
        let hasResults = false; // Flag to track if any results were found

        // Hide all tasks
        taskList.children().hide();

        // Show tasks that match the search term
        taskList.children().each(function () {
            const task = $(this);
            const taskText = task.text().toLowerCase();
            if (taskText.includes(searchTerm)) {
                task.show();
                hasResults = true;
            }
        });

        // Display "No Results" message if no tasks match
        if (!hasResults) {
            taskList.append(noResultsMessage);
        } else {
            noResultsMessage.remove(); // Remove the message if results are found
        }
    });
});
