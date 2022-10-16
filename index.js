const inquirer = require('inquirer');
const db = require('./db/connections.js');

db.connect(err => {
  if (err) throw err;
  console.log('You are connected.');
  track_employee();
});

var track_employee = function() {
  inquirer.prompt([{
    type: 'list',
    name: 'prompt',
    message: 'What do you want to do?',
    choices: ['See all departments', 'See all roles', 'See all employees', 'Add a department', 'Add a role', 'Add a emplyee', 'Update an employees role', 'Sign out']
  }]).then((answers) => {
    if (answers.prompt === 'See all departments') {
      db.query('SELECT * FROM department', (err, result) => {
        if(err) throw err;
        console.log("Seeing all departments: ");
        console.table(result);
        track_employee();
      });
      } else if (answers.prompt === 'See all roles') {
        db.query('SELECT * FROM role', (err, result) => {
          if (err) throw err;
          console.log("Seeing all roles: ");
          track_employee();
        });
      } else if (answers.prompt === 'See all Employees') {
        db.query('SELECT * FROM employee', (err, result) => {
          if (err) throw err;
          console.log("Seeing all employees: ");
          employee_tracker();
        });
      } else if (answers.prompt === 'Add a department') {
        inquirer.prompt([{
          type: 'input',
          name: 'department',
          message: 'What department is it?',
          validate: departmentInput => {
            if (departmentInput) {
              return true;
            }
          }
        }]).then((answers) => {
          db.query('INSERT INTO department (name) VALUES (?)', [answers.dpeartment], (err, result) => {
            if (err) throw err;
            console.log('Added ${answers.department} to the database.')
            track_employee();
          });
        })
      } else if (answers,prompt === 'Add a role') {
        db.query('SELECT * From department', (err, result) => {
          if (err) throw err;

          inquirer.prompt([
            {
              type: 'input',
              name: 'role',
              message: 'what type of role?',
              validate: roleInput => {
                if (roleInput) {
                  return true;
                } else {
                  console.log('please try again');
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'salary',
              message: 'What is the salary amount?',
              validate: salaryInput => {
                if (salaryInput) {
                  return true;
                } else {
                  console.log('please try again');
                  return false;
                }
              }
            },
            {
              type: 'list',
              name: 'department',
              message: 'What department does this role fall within?',
              choices: () => {
                var array = [];
                for (var i = 0; i < result.length; i++) {
                  array.push(result[i].name);
                }
                return array;
              }
            }
          ]).then((answers) => {
            for (var i = 0; i < result.length; i++) {
              if (result[i].name === answers.department) {
              var department = result[i];
            }
          }

          db.query('INSERT INTO role (title, salary, department_id) Values (?, ?, ?)', [answers.role, answers.salary, departmenr.id], (err, result) => {
            if (err) throw err;
            console.log('Added ${answers.role} to database.')
            track_employee();
          });
        })
      });
  } else if (answers.prompt === 'Add a employee') {
    db.query('SELCET * FROM employee, role', (err, result) => {
      if (err) throw err;

      inquirer.prompt([
        {
          type: 'input',
          name: 'firstName',
          message: 'What is the employees first name?',
          validate: firstNameInput => {
            if (firstNameInput) {
              return true;
            }else {
              console.log('Please add a first name');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'lastName',
          message: 'What is the employees last name?',
          validate: lastNameInput => {
            if (lastNameInput) {
              return true;
            } else {
              console.log('Please add a last name');
              return false;
            } 
          }
        },
        {
          type: 'list',
          name: 'role',
          message: 'what is the employees role?',
          choices: () => {
            var array = [];
            for (var i = 0; i < result.length; i++) {
              array.push(result[i].title);
            }
            var newArray = [...new Set(array)];
            return newArray;
          }
        },
        {type: 'input',
        name: 'manager',
        message: 'Who is the employees manager?',
        validate: managerInput => {
          if (managerInput) {
            return true;
          } else {
            console.log('Please add a Manager');
            return false;
          }
        }
        }
      ]).then((answers) => {
        for (var i = o; i < result.length; i++) {
          if (result[i].title === answers.role) {
            var role = result[i];
          }
        }
        db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id VALUES (?, ?, ?, ?)', [answers.firstName, answers.lastName, role.id, answers.manager.id], (err, result) => {
          if (err) throw err;
          console.log('Added ${answers.firstName} ${answers.lastName} to the database.')
          employee_tracker();
        });
      })
    });
  } else if (answers.prompt === 'Update an employees role') {
    db.query('SELECT * FROM employee, role', (err, result) => {
      if (err) throw err;

      inquirer.prompt([
        {
          type: 'list',
          name: 'emplyee',
          message: 'Which employees role do you want to update?',
          choices: () => {
            var array = [];
            for (var i = 0; i < result.length; i++) {
              array.push(result[i].last_name);
            }
            var employeeArray = [...new Set(array)];
            return employeeArray;
          }
        },
        {
          type: 'list',
          name: 'role',
          message: 'What is their new role?',
          choices: () => {
            var array = [];
            for (var i = 0; i < result.length; i++) {
              array.push(result[i].title);
            }
            var newArray = [...new Set(array)];
            return newArray;
          }
        }
      ]).then((answers) => {
        for (var i = 0; i < result.length; i++) {
          if (result[i].last_name === answers.employee) {
            var name = result[i];
          }
        }
        for (var i = 0; i < result.length; i++) {
          if (result[i].title === answers.role) {
            var role = result[i];
          }
        }
        db.query('UPDATE employee SET ? WHERE ?', [{role_id: role}, {last_name: name}], (err, result) => {
          if (err) throw err;
          console.log('Updated ${answers.employee} role to the database.')
          track_employee();
        });
      })
    });
  } else if (answers.prompt === 'Sign out') {
  db.end();
  console.log("Good-Bye!");
}
})
};