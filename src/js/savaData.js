export default function saveData(data) {
    const stringData = JSON.stringify(data)

    localStorage.setItem("projects", stringData);
}