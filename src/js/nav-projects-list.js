export default function (projects, navList) {
    projects.forEach((project) => {
        const navProject = document.createElement("div");
        navProject.classList.add("nav-project");

        const index = projects.indexOf(project);
        navProject.setAttribute("data-index", index);

        navProject.textContent = project.name;

        navList.appendChild(navProject)

    });
}

{/* 
<div id="nav-projects-list">
    <div class="nav-project" data-index="0">Create a to-do list app</div>
    <div class="nav-project" data-index="1">Learn German</div>
</div>
*/}