function addtask() {

    // Get the input value
    const newtask = document.getElementById("todo-input").value.trim();

    // Check if the task is empty
    if (newtask === '') {
        alert("Please enter a task.");
        return;
    }

    // Create a new span element for the task
    const spanEl = document.createElement("span");
    spanEl.innerHTML = newtask;

    // Create a delete button
    const buttonEl = document.createElement("button");
    buttonEl.setAttribute("id", "delebtn"); 
    buttonEl.innerHTML = "Delete";

    // Add event listener to delete the task
    buttonEl.addEventListener('click', function() {
        this.parentElement.remove();
    });

    // Create a new div to hold the task and delete button
    const newdiv = document.createElement("div");
    newdiv.setAttribute("id","maindiv");
    newdiv.appendChild(spanEl);
    newdiv.appendChild(buttonEl);

    // Append the new task div to the list
    document.getElementById("todo-list").append(newdiv);

    // Clear the input field after adding the task
    document.getElementById("todo-input").value = '';

    alert("New task added successfully");
}
