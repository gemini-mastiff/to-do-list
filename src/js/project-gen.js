export default function(project, content) {
    const toDoArray = project.toDoList;

    const wrapper = document.createElement("div");
    wrapper.classList.add("project-page-wrapper");

    const titleWrapper = document.createElement("div");
    titleWrapper.classList.add("title-wrapper");
    const projectHeader = document.createElement("h1");
    const projectDesc = document.createElement("p");
    projectHeader.textContent = project.name;
    projectDesc.textContent = project.description;
    titleWrapper.appendChild(projectHeader);
    titleWrapper.appendChild(projectDesc);

    const toDoList = document.createElement("ul");
    toDoList.classList.add("to-do-list");

    toDoArray.forEach((toDo) => {
        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const header = document.createElement("h2");
        header.textContent = toDo.name;

        const deadline = document.createElement("p");
        deadline.textContent = toDo.deadline;

        listItem.appendChild(checkbox);
        listItem.appendChild(header);
        listItem.appendChild(deadline);
        toDoList.appendChild(listItem);
    });

    wrapper.appendChild(titleWrapper);
    wrapper.appendChild(toDoList);
    content.appendChild(wrapper);

}

{/* 
<div id="content">
    <div class="project-page-wrapper">
        <div class="title-wrapper">
            <h1>Project Title</h1>
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
*/}