function addtask() {
    alert("New task added successfully");

    // Get the input value
    const newtask = document.getElementById("todo-input").value;

    // Check if the task is empty
    if (newtask === '') {
        alert("Please enter a task.");
        return;
    }

    // Create a new span element for the task
    const spanEl = document.createElement("span");
    spanEl.innerHTML = newtask;

    // Create a "Complete" button
    const completeBtn = document.createElement("button");
    completeBtn.setAttribute("id", "completebtn");
    completeBtn.innerHTML = "Complete";

    // Add event listener to mark the task as complete
    completeBtn.addEventListener('click', function () {
        spanEl.style.textDecoration = "line-through"
});

    // Create a delete button
    const buttonEl = document.createElement("button");
    buttonEl.setAttribute("id", "delebtn");
    buttonEl.innerHTML = "Delete";

    // Add event listener to delete the task
    buttonEl.addEventListener('click', function () {
        maindiv.remove();
    });

    // Create a new div to hold complete button, and delete button
    const btndiv = document.createElement("div");
    btndiv.setAttribute("id","btndiv")
    btndiv.appendChild(completeBtn);
    btndiv.appendChild(buttonEl);
    // Create a new div to hold the task, complete button, and delete button
    const maindiv = document.createElement("div");
    maindiv.setAttribute("id","maindiv")
    maindiv.appendChild(spanEl)
    maindiv.appendChild(btndiv)


    // Append the new task div to the list
    document.getElementById("todo-list").append(maindiv);

    // Clear the input field after adding the task
    document.getElementById("todo-input").value = '';
}
