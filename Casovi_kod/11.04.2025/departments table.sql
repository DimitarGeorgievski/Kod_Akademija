SELECT * FROM employees;
SELECT * FROM departments;


CREATE VIEW First_view
AS
SELECT e.emp_id, e.name, d.dept_name FROM employees e
JOIN departments d ON e.dept_id = d.dept_id;

CREATE VIEW department_statistics
AS
SELECT d.dept_name, COUNT(e.emp_id) AS employee_count FROM departments d
JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_id;

SELECT * FROM First_view;
SELECT * FROM department_statistics;

-- UPDATEABLE VIEWS
CREATE VIEW it_employees
AS
SELECT emp_id, name, dept_id FROM employees e
WHERE dept_id = 1
WITH CHECK OPTION;

SELECT * FROM it_employees;
INSERT INTO it_employees(emp_id,name,dept_id) VALUES (10,'Employee 1', 1);