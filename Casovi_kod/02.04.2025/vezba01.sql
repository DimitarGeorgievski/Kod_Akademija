CREATE TABLE users (
	id INTEGER, 
	username VARCHAR(50),
	email VARCHAR(50)
);
CREATE TABLE IF NOT EXISTS products(
	id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	price DECIMAL(10,2)
);
INSERT INTO users(id,username,email)
VALUES
	(1, 'test-user', 'test@gmail.com'),
	(2, 'restuser', 'rest@gmail.com');

-- getting all data 
SELECT * FROM users;
-- reading specific columns from a table
SELECT email FROM users;

-- filtering rows based on a where condition
SELECT * FROM users
WHERE email = 'test@gmail.com';

INSERT INTO users(id,username,email)
VALUES(3,'thirduser', 'third@gmail.com');

--  update data
UPDATE users
SET email = 'updatedEmail@gmail.com', username = 'updatedUser'
WHERE id = 3

SELECT * FROM users;

-- delete item with id = 3
DELETE 
FROM users
WHERE id = 5;

-- insterting easier way
INSERT INTO users
VALUES
(4, 'deleteuser', 'delete@gmail.com'),
(5, 'deleteuser', 'delete@gmail.com'),
(6, 'deleteuser', 'delete@gmail.com');

-- without specified gmail just to see what will be in the table
INSERT INTO users
VALUES(5, 'deleteuser');

-- Deleting a table
DROP TABLE users;

-- Adding a column to a table using the ALTER keyword
ALTER TABLE users
ADD COLUMN phone VARCHAR(15);

-- Removing a column using ALTER keyword
ALTER TABLE users
DROP COLUMN phone;

SELECT * from users;

-- Copy table with data
CREATE TABLE users_backup AS
SELECT * FROM users;

SELECT * FROM users_backup;

DROP TABLE products;

INSERT INTO products(name,price)
VALUES
('Milka Bubbles','199.99'),
('Bounty', 59.56),
('Najljepshe Zhelje', 84);

SELECT * FROM products;

-- Renaming a column in a table
ALTER TABLE products
RENAME COLUMN name to product_name;