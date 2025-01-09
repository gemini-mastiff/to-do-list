# to-do list

In this project I will create an application that will allow the user to create a to-do list for their various projects. 

# the experience

- User will load the website
- the website will load any existing user data
    - ensure no error if none is found

- user will add folder
    - user will be prompted to give folderName and folderDescription (optional aesthetic features to be implemented at a later date)

- An folder object will be created containing the above variables.
- This empty folder object is then displayed on the DOM, with a "Settings" button to change the above folder variables, as well as a "+" button to add a project

- When the "+ project" button is pressed, the user will be prompted to add details for the project
    - It will require a projectName, projectDescription, projectDeadline

- An empty project object will be created, appended to the folder, and displayed within the folder.

- The user may then add to-dos to this project. They will be prompted for:
    - task
    - description
    - deadline
    - priority
- The to-do object will be created, appended to the project, and displayed within a list.

- All objects will have the functionality to be edited or deleted
- Users can choose whether to order the to-do items by date or by priority