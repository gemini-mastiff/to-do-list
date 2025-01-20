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

  data.forEach((object) => {
    object.addToDoItem = function(toDoItem) {
      this.toDoList.push(toDoItem);
    }
    object.delToDoItem = function(toDoIndex) {
      this.toDoList.splice(toDoIndex, 1);
    }
  });

  return data;
}

export default function() {
    if (storageAvailable("localStorage")) {
        if(!localStorage.getItem("folders")) {
            console.log(defaultData);
            return parseData(defaultData);
        } else {
            return localStorage.getItem("folders");
        }
    } else {
        return defaultData;
    }
}