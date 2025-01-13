import  { addNewFolder, newFolder, newProject, newToDoItem} from "./js/app-logic"
import loadData from "./js/loadData.js";
import generateNavFolders from "./js/nav-folder-list.js";
import generateProjectPage from "./js/project-gen.js";
import generateFolderPage from "./js/folder-gen.js";
import "./styles.css";

console.log("Hello World!");

let folders = [].concat(loadData());
console.log(folders);

const navList = document.querySelector("#nav-folder-list");
const content = document.querySelector("#content");

function clearContent() {
    content.textContent = '';
}

generateNavFolders(folders, navList);
generateProjectPage(folders[0].projects[0], content);

const allFolders = document.querySelectorAll(".nav-folder");
allFolders.forEach((folderItem) => {
    const folderIndex = folderItem.dataset.index
    const folderLink = folderItem.querySelector("h2");
    const projectLinks = folderItem.querySelectorAll("li");

    folderLink.addEventListener("click", () => {
        clearContent();
        generateFolderPage(folders[folderIndex], content);
    })
})