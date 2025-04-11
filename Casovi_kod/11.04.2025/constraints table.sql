-- razlika izmegju update i alter? update podatocite vo tabelata a alter gi menva polinjata na tabelata
-- koga imame many to many treba da imame i treta tabela kaj so gi povrzuva dvete tabeli toest da ima vo tabelata dvete primary key
-- Add constraints on existing tables
SELECT * FROM students;
SELECT * FROM employees;
SELECT * FROM courses;
SELECT * FROM student_courses;
ALTER TABLE students
ADD CONSTRAINT pk_students PRIMARY KEY(student_id);

INSERT INTO students VALUES(7, 'Bob bobsky', 'bob@email.com');

ALTER TABLE students
ADD CONSTRAINT uq_students_email UNIQUE(email);

INSERT INTO students VALUES(8, 'Jane Doe', 'janeDoe@email.com');

ALTER TABLE departments
ADD CONSTRAINT pk_departments PRIMARY KEY(dept_id);

ALTER TABLE employees
ADD CONSTRAINT pk_employees PRIMARY KEY(emp_id);

ALTER TABLE employees
ADD CONSTRAINT fk_employees_departments FOREIGN KEY(dept_id) REFERENCES departments(dept_id);

ALTER TABLE courses
ADD CONSTRAINT pk_courses PRIMARY KEY(course_id);

ALTER TABLE student_courses
ADD CONSTRAINT pk_student_courses PRIMARY KEY(student_id, course_id);

ALTER TABLE student_courses
ADD CONSTRAINT fk_student_courses_students FOREIGN KEY(student_id) REFERENCES students(student_id);

ALTER TABLE student_courses
ADD CONSTRAINT fk_student_courses_courses FOREIGN KEY(course_id) REFERENCES courses(course_id);

-- ADD NEW COLUMN ON EXISTING TABLE 
ALTER TABLE departments 
ADD COLUMN description VARCHAR(255);

-- STRING_AGG
SELECT s.student_id, s.name, STRING_AGG(c.course_name, ', ') AS course_list FROM students s -- so STRING_AGG gi zema site kursevi i gi spojva vo course_list
JOIN student_courses sc ON s.student_id = sc.student_id
JOIN courses c ON sc.course_id = c.course_id
GROUP BY s.student_id,s.name;