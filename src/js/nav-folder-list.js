export default function (folders, navList) {
    folders.forEach((folder) => {
        const navFolder = document.createElement("div");
        navFolder.classList.add("nav-folder");
        const index = folders.indexOf(folder);
        navFolder.setAttribute("data-index", index);

        const folderHeader = document.createElement("h2");
        folderHeader.textContent = folder.name;

        const navProjects = document.createElement("ul");
        navProjects.classList.add("nav-projects");

        folder.projects.forEach((project) => {
            const projectItem = document.createElement("li");
            projectItem.textContent = project.name;
            const projIndex = folder.projects.indexOf(project)
            projectItem.setAttribute("data-index", projIndex);
            navProjects.appendChild(projectItem);
        })

        navFolder.appendChild(folderHeader);
        navFolder.appendChild(navProjects);
        navList.appendChild(navFolder)

    });
}

{/* 
<div class="nav-folder">
    <h2>Default Folder</h2>
    <ul class="nav-projects">
        <li>Default Project</li>
    </ul>
</div> 
*/}