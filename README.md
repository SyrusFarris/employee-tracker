# employee-tracker

## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## How to Use
    1. Download files from Repo
    2. install npm init -y to create a new .json file
    3. npm i
    4. npm i inquirer@8.2.4
    5. npm install --save mysql2
    6. npm install console.table --save
    7. make sure to run .sql file in mySQL workbench before running server.js so that tables are able to render
    8. run node server.js
    9. make sure server.js is connected to SQL before continuing
    10. run through prompts as required

## Difficulties
I re-did this project after a few weeks.  Did a lot more research on documentation and looked at the module. I properly learned how to route the DB to seed the results I want and get the program to work with and initiate the command line prompts. Very happy I took the time to go back and learn how to properly do this!


## Screen Shots

![Screenshot](./assets/eptracker.png "")

## links:

Github Repo: https://github.com/SyrusFarris/employee-tracker

Link to video: https://drive.google.com/file/d/12bm5Ff63pqoNZt2Z9x63KDdgpoP3DxS7/view