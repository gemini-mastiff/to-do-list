import closeBtnSvg from "../svg/window-close.svg";
import editBtnSvg from "../svg/dots-horizontal.svg";
import toDoBtnSvg from "../svg/plus.svg";

const navList = document.querySelector("#nav-projects-list");
const content = document.querySelector("#content");
const dialog = document.querySelector("#dialog");


function clearElement(element) {
    element.textContent = '';
}


function newInputElement(text, name, type, defaultValue = ''){
    const wrapper = document.createElement("div");
    wrapper.classList.add("input-wrapper");

    const label = document.createElement("label");
    label.textContent = `${text}:`;
    label.htmlFor = name;

    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.id = name;
    input.defaultValue = defaultValue;

    wrapper.append(label, input);
    return wrapper;
}

function newTextAreaElement(text, name, rows, defaultValue = ''){
    const wrapper = document.createElement("div");
    wrapper.classList.add("input-wrapper");

    const label = document.createElement("label");
    label.textContent = `${text}:`;
    label.htmlFor = name;

    const textarea = document.createElement("textarea");
    textarea.rows = rows;
    textarea.name = name;
    textarea.id = name;
    textarea.defaultValue = defaultValue;

    wrapper.append(label, textarea);
    return wrapper;
}

function newSelectElement(text, name, optionsArray){
    const wrapper = document.createElement("div");
    wrapper.classList.add("input-wrapper");

    const label = document.createElement("label");
    label.textContent = `${text}:`;
    label.htmlFor = name;

    const select = document.createElement("select");
    select.name = name;
    select.id = name;

    optionsArray.forEach((option) => {
        const selectItem = document.createElement("option");
        selectItem.value = option;
        selectItem.textContent = option;

        select.append(selectItem);
    })

    wrapper.append(label, select);
    return wrapper;
}


function generateEditProjectDialog(project, index) {
    const editProjectDialog = document.createElement("dialog");
    editProjectDialog.classList.add("modal");
    editProjectDialog.id = "edit-project-dialog";

    const closeDialogBtn = document.createElement("img");
    closeDialogBtn.src = closeBtnSvg;
    closeDialogBtn.classList.add("close-button")
    closeDialogBtn.alt = "Close Button";
    closeDialogBtn.id = "edit-project-close";

    const dialogHeader = document.createElement("h2");
    dialogHeader.textContent = "Edit Project";

    const dialogForm = document.createElement("form");
    dialogForm.id = "edit-project-form"
    dialogForm.method = "dialog";

    const projectName = newInputElement("Project Name", "newProjectName", "text", project.name);

    const projectDescription = newTextAreaElement("Description", "newProjectDescription", "4", project.description);

    const projectDeadline = newInputElement("Deadline", "newProjectDeadline", "datetime-local", project.deadline);

    const saveProjectBtn = document.createElement("button");
    saveProjectBtn.textContent = "Save";
    saveProjectBtn.id = "edit-project-save";
    saveProjectBtn.setAttribute("data-index", index);

    editProjectDialog.addEventListener("close", () => {
        clearElement(dialog);
    })

    dialogForm.append( projectName, projectDescription, projectDeadline, saveProjectBtn );

    editProjectDialog.append( closeDialogBtn, dialogHeader, dialogForm );
    dialog.append(editProjectDialog);
}

function generateNewToDoDialog(){
    const newToDoDialog = document.createElement("dialog");
    newToDoDialog.classList.add("modal");
    newToDoDialog.id = "new-to-do-dialog";

    const closeDialogBtn = document.createElement("img");
    closeDialogBtn.src = closeBtnSvg;
    closeDialogBtn.classList.add("close-button")
    closeDialogBtn.alt = "Close Button";
    closeDialogBtn.id = "new-to-do-close";

    const dialogHeader = document.createElement("h2");
    dialogHeader.textContent = "New To-Do";

    const dialogForm = document.createElement("form");
    dialogForm.id = "new-to-do-form"
    dialogForm.method = "dialog";

    const toDoName = newInputElement("Task", "newToDoName", "text");

    const toDoDescription = newTextAreaElement("Description", "newToDoDescription", "4");

    const toDoDeadline = newInputElement("Deadline", "newToDoDeadline", "datetime-local");

    const toDoPriority = newSelectElement("Priority", "newToDoPriority", ["High", "Low", "Daily", "Anytime"]);

    const bottomRow = document.createElement("div");
    bottomRow.classList.add("bottom-row");
    bottomRow.append( toDoDeadline, toDoPriority )

    const saveProjectBtn = document.createElement("button");
    saveProjectBtn.textContent = "Save";
    saveProjectBtn.id = "new-to-do-save";

    newToDoDialog.addEventListener("close", () => {
        clearElement(dialog);
    })

    dialogForm.append( toDoName, toDoDescription, bottomRow, saveProjectBtn );

    newToDoDialog.append( closeDialogBtn, dialogHeader, dialogForm );
    dialog.append( newToDoDialog );
}


function generateProjectPage(projects, index) {
    clearElement(content);

    const project = projects[index];
    const toDoArray = project.toDoList;

    const wrapper = document.createElement("div");
    wrapper.classList.add("project-page-wrapper");

    const titleWrapper = document.createElement("div");
    titleWrapper.classList.add("title-wrapper");
    const projectHeader = document.createElement("h1");
    projectHeader.textContent = project.name;
    const editProjectBtn = document.createElement("img");
    editProjectBtn.src = editBtnSvg;
    editProjectBtn.alt = "Edit Project";
    editProjectBtn.classList.add("edit-project-button");
    editProjectBtn.id = "edit-project-open";
    const projectDesc = document.createElement("p");
    projectDesc.textContent = project.description;
    const newProjectDeadline = document.createElement("p");
    newProjectDeadline.textContent = `Due: ${project.deadline}`;

    projectHeader.append(editProjectBtn);
    titleWrapper.append(projectHeader, newProjectDeadline, projectDesc);

    const toDoList = document.createElement("ul");
    toDoList.classList.add("to-do-list");

    toDoArray.forEach((toDo) => {
        const toDoIndex = toDoArray.indexOf(toDo);

        const listItem = document.createElement("li");
        listItem.setAttribute("data-index", toDoIndex);
        listItem.classList.add("to-do-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "to-do-checkbox";
        checkbox.checked = toDo.complete ? true : false;

        const header = document.createElement("h2");
        header.textContent = toDo.name;

        const deadline = document.createElement("p");
        deadline.textContent = toDo.deadline;

        listItem.append(checkbox, header, deadline);
        toDoList.append(listItem);
    });

    const newToDoBtn = document.createElement("button");
    newToDoBtn.id = "new-to-do-open";
    const newToDoIcon = document.createElement("img");
    newToDoIcon.src = toDoBtnSvg;
    newToDoIcon.alt = "Add To-Do";
    const newToDoP = document.createElement("p");
    newToDoP.textContent = "Add To-Do";
    newToDoBtn.append(newToDoIcon, newToDoP);

    wrapper.append(titleWrapper, toDoList, newToDoBtn);

    content.append(wrapper);
}

{/* 
The above fuction generates:

<div id="content">
    <div class="project-page-wrapper">
        <div class="title-wrapper">
            <h1>Project Title</h1>
            <img src="./svg/dots-horizontal.svg" alt"Edit Project" id="edit-project-open" class="edit-project-button">
            <p>This is the description of the Project.</p>
        </div>
        <ul class="to-do-list">
            <li>
                <input type="checkbox">
                <h2>To Do 1</h2>
                <p>11 Jan 13:00</p>
            </li>
            <li>
                <input type="checkbox">
                <h2>To Do 2</h2>
                <p>18 Feb 21:30</p>
            </li>
            <li>
                <input type="checkbox">
                <h2>To Do 3</h2>
                <p>25 Dec</p>
            </li>
        </ul>
    </div>
</div>

<dialog class="modal" id="edit-project-modal">
    <img src="./svg/window-close.svg" alt="Close Button" id="edit-project-close" class="close-button">
    <h2>Edit Project</h2>
    <form method="dialog">
        <label for="newProjectName">Project Name:</label>
        <input type="text" name="newProjectName" id="newProjectName">
        <label for="newProjectDescription">Description:</label>
        <textarea rows="3" name="newProjectDescription" id="newProjectDescription"></textarea>
        <label for="newProjectDeadline">Deadline:</label>
        <input type="datetime-local" name="newProjectDeadline" id="newProjectDeadline">
        <button id="edit-project-save" data-index="x" >Save</button>
    </form>
</dialog>

*/}

function generateNavprojects(projects) {
    clearElement(navList);

    projects.forEach((project) => {
        const navProject = document.createElement("div");
        navProject.classList.add("nav-project");

        const index = projects.indexOf(project);
        navProject.setAttribute("data-index", index);

        navProject.textContent = project.name;

        navList.append(navProject)

    });
}

{/* 
The above function generates:

<div id="nav-projects-list">
    <div class="nav-project" data-index="0">Create a to-do list app</div>
    <div class="nav-project" data-index="1">Learn German</div>
</div>
*/}

export { generateProjectPage, generateNavprojects, generateEditProjectDialog, generateNewToDoDialog }