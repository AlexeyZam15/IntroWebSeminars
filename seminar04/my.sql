-- create
CREATE TABLE EMPLOYEE (
  empId INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  dept TEXT NOT NULL
);

-- insert
INSERT INTO EMPLOYEE(name, dept) VALUES ('Vacant', 'Sales');
INSERT INTO EMPLOYEE(name, dept) VALUES ('Dave', 'Accounting');
INSERT INTO EMPLOYEE(name, dept) VALUES ('Ava', 'Sales');
INSERT INTO EMPLOYEE(name, dept) VALUES ('Andrey', 'Sales');
INSERT INTO EMPLOYEE(name, dept) VALUES ('Nicolas', 'Sales');
INSERT INTO EMPLOYEE(name, dept) VALUES ('Jane', 'Sales');
INSERT INTO EMPLOYEE(name, dept) VALUES ('Tomas', 'Sales');
INSERT INTO EMPLOYEE(name, dept) VALUES ('Lee', 'Sales');

-- fetch
SELECT empId, name
FROM EMPLOYEE WHERE dept = 'Sales' AND empId > 2 AND name LIKE '%a%' OR name = 'Dave'
ORDER BY name ASC;