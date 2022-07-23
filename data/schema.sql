DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

/* no , at the last row*/
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    tilte VARCHAR(30),
    salary DECIMAL(7, 2),
    department_id INTEGER,
    CONSTRAINT fk_dep FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER FOREIGN KEY REFERENCES employee(id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id)
);