import  { addNewprojects, newprojects, newProject, newToDoItem} from "./js/app-logic"
import loadData from "./js/loadData.js";
import generateNavprojects from "./js/nav-projects-list.js";
import generateProjectPage from "./js/project-gen.js";
import generateprojectsPage from "./js/projects-gen.js";
import "./styles.css";

console.log("Hello World!");

let projects = [].concat(loadData());
console.log(projects);

const navList = document.querySelector("#nav-projects-list");
const content = document.querySelector("#content");

function clearContent() {
    content.textContent = '';
}

function updatePage(){
    generateNavprojects(projects, navList);
    const allprojects = document.querySelectorAll(".nav-projects");
    allprojects.forEach((projectsItem) => {
        const projectsIndex = projectsItem.dataset.index;
        const projectsLink = projectsItem.querySelector("h2");
        const allProjectLinks = projectsItem.querySelectorAll("li");
    
        projectsLink.addEventListener("click", () => {
            clearContent();
            generateprojectsPage(projects[projectsIndex], content);
        });
    
        allProjectLinks.forEach((projectLink) => {
            const projectIndex = projectLink.dataset.index;
            projectLink.addEventListener("click", () => {
                clearContent();
                generateProjectPage(projects[projectsIndex].projects[projectIndex], content);
            });
        });
    });
}

generateProjectPage(projects[0], content);
updatePage()