document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;
    const taskPriority = document.getElementById("task-priority").value;

    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = taskDescription;

  
    if (taskPriority === "HIGH") {
      newTaskItem.style.color = "violet";
    } else if (taskPriority === "MEDIUM") {
      newTaskItem.style.color = "yellow";
    } else {
      newTaskItem.style.color = "green";
    }

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(newTaskItem);
    });

  
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      const newDescription = prompt("Edit your task:", taskDescription);
      if (newDescription) {
        newTaskItem.firstChild.nodeValue = newDescription;
      }
    });

    
    newTaskItem.appendChild(editButton);
    newTaskItem.appendChild(deleteButton);

    
    taskList.appendChild(newTaskItem);


    form.reset();
  });

  document.getElementById("sort-tasks").addEventListener("click", () => {
    const tasksArray = Array.from(taskList.children);

    tasksArray.sort((a, b) => {
      const priorityA = a.style.color === "violet" ? 3 : a.style.color === "yellow" ? 2 : 1;
      const priorityB = b.style.color === "violet" ? 3 : b.style.color === "yellow" ? 2 : 1;
      return priorityB - priorityA; 
    });

    taskList.innerHTML = "";
    tasksArray.forEach((task) => taskList.appendChild(task));
  });
});
