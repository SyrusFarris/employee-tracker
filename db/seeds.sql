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
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "Rodriguez", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Tupik", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Junal", "Singh", 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Malia", "Brown", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Lourd", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "HAllen", 1, 2);