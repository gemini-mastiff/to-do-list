import defaultData from "./default-data.json" assert { type: 'json'};

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
}

function parseData(data) {
  const parsedData = JSON.parse(data);

  parsedData.forEach((object) => {
    object.addToDoItem = function(toDoItem) {
      this.toDoList.push(toDoItem);
    }
    object.delToDoItem = function(toDoIndex) {
      this.toDoList.splice(toDoIndex, 1);
    }
  });

  return parsedData;
}

export default function() {
  const stringDefaultData = JSON.stringify(defaultData);
    if (storageAvailable("localStorage")) {
      if(!localStorage.getItem("projects")) {
        return parseData(stringDefaultData);
      } else {
        const newData = localStorage.getItem("projects");
        return parseData(newData);
      }
    } else {
      return parseData(stringDefaultData);
    }
}