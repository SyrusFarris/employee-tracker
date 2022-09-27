USE employeesDB;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
Values ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
Values ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
Values ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
Values ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
Values ("Legal Team Lead", 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 3);