const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", addTask);


function addTask() {
    const taskText = taskInput.value;
    if (taskText === "") {
        alert("please enter a task");
        return;
    }
    validationMessage.style.display = "none";

    taskInput.value = "";
}