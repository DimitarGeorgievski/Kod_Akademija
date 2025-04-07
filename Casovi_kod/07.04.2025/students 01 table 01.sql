CREATE TABLE students (
	student_id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	enrollment_date DATE
);

CREATE TABLE subjects(
	subject_id SERIAL PRIMARY KEY,
	subject_name VARCHAR(100) NOT NULL UNIQUE,
	student_id INTEGER,
	FOREIGN KEY(student_id) REFERENCES students(student_id) -- KAJ FOREIGN KEY TREBA DA GO IMA IMETO OD SUBJECTS TOEST OD OVA TABELA OVDE A ZA REFERENCES TREBA OD TABELATA KAJ SO LINKOVAME
);

CREATE TABLE student_profiles(
	profile_id SERIAL PRIMARY KEY,
	student_id INTEGER UNIQUE,
	bio TEXT,
	linkedin VARCHAR(100),
	FOREIGN KEY(student_id) REFERENCES students(student_id)
);

-- Add students
INSERT INTO students(name,email, enrollment_date) VALUES ('Alice Johnson', 'alice@email.com', '2024-09-01');
INSERT INTO students(name,email, enrollment_date) VALUES ('Bob Smith', 'bob@email.com', '2024-09-01');
INSERT INTO students(name,email, enrollment_date) VALUES ('Bob Bobsky', 'bob123@email.com', '2024-09-01');

INSERT INTO subjects(subject_name, student_id) VALUES ('Databases', 1), ('NodeJS', 2), ('Javascript', 3);

SELECT * FROM students;