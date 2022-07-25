INSERT INTO
    department (name)
VALUES
    ('JAVASCRIPT'),
    ('CSS'),
    ('HTML'),
    ('Node.js'),
    ('Insomia'),
    ('mysql');
INSERT INTO role (tilte,salary,department_id)
VALUES
('JS coding',72000,1),
('JS debugging',72000,1),
('JS I found something new',75000,1),
('CSS colouring',73000,2),
('CSS database setting',80000,2),
('HTML creating',70000,3),
('Node backend setting',82000,4),
('Insomia GET POST PUT DELETE',68000,5),
('mysql database setting',75000,6);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES
('Loi','Tran',1,NULL),
('Pheobe','Parrish',1,1),
('Akshay', 'Perry',2,6),
('Tony', 'Stark',4,NULL),
('Kali', 'Mclaughlin',3,4),
('Stan', 'Lee',2,NULL),
('Thor','Stormbreaker',6,NULL),
('Samuel', 'Orozco',6,6),
('Jannat', 'Howe',3,1),
('Hadiqa', 'Moran',4,4),
('Tanya', 'Fleming',5,7),
('Wanda', 'Buxton',6,7);