export default function (folder, content) {
    const projectsArray = folder.projects;

    const wrapper = document.createElement("div");
    wrapper.classList.add("folder-wrapper");

    const titleWrapper = document.createElement("div");
    titleWrapper.classList.add("title-wrapper");
    const folderHeader = document.createElement("h1");
    const folderDesc = document.createElement("p");
    folderHeader.textContent = folder.name;
    folderDesc.textContent = folder.description;
    titleWrapper.appendChild(folderHeader);
    titleWrapper.appendChild(folderDesc);

    const projectsList = document.createElement("div");
    projectsList.classList.add("projects-list");

    projectsArray.forEach((project) => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");

        const header = document.createElement("h2");
        const description = document.createElement("p");
        header.textContent = project.name;
        description.textContent = project.description;

        projectItem.appendChild(header);
        projectItem.appendChild(description);
        projectsList.appendChild(projectItem);
    });

    wrapper.appendChild(titleWrapper);
    wrapper.appendChild(projectsList);
    content.appendChild(wrapper);

}

{/* 

<div class="folder-page-wrapper">
    <div class="title-wrapper">
        <h1>Default Folder</h1>
        <p>This is the default folder.</p>
    </div>
    <div class="projects-list">
        <div class="project-item">
            <h2>Default Project 1</h2>
            <p>This is a default description.</p>
        </div>
        <div class="project-item">
            <h2>Learn German</h2>
            <p>I want to move to Germany, so I must learn the language</p>
        </div>
    </div>
</div>

*/}