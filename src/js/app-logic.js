function newProject(name, description, deadline) {
    const toDoList = [];
    const addToDoItem = (toDoItem) => toDoList.push(toDoItem);
    const delToDoItem = (toDoIndex) => toDoList.splice(toDoIndex, 1);

    return { name, description, deadline, toDoList, addToDoItem, delToDoItem };
}

function newToDoItem(name, description, deadline, priority) {
    return { name, description, deadline, priority };
}

export { newProject, newToDoItem };