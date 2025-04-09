SELECT * FROM sales_2023;
SELECT * FROM sales_2024;
SELECT * FROM products;

-- COMBINE BOTH PRODUCT NAMES FORM BOTH SALES TABLES FOR 2023 AND 2024 WITHOUT DUPLICATES

SELECT p.name FROM sales_2023 s
JOIN products p ON s.product_id = p.id
UNION
SELECT p.name FROM sales_2024 s
JOIN products p ON s.product_id = p.id;

SELECT p.name FROM sales_2023 s
JOIN products p ON s.product_id = p.id
UNION ALL
SELECT p.name FROM sales_2024 s
JOIN products p ON s.product_id = p.id;

SELECT p.name FROM sales_2023 s
JOIN products p ON s.product_id = p.id
INTERSECT
SELECT p.name FROM sales_2024 s
JOIN products p ON s.product_id = p.id;

SELECT p.name FROM sales_2023 s
JOIN products p ON s.product_id = p.id
EXCEPT
SELECT p.name FROM sales_2024 s
JOIN products p ON s.product_id = p.id;

SELECT p.name FROM sales_2023 s
JOIN products p ON s.product_id = p.id
WHERE price > 100
UNION
SELECT p.name FROM sales_2024 s
JOIN products p ON s.product_id = p.id
WHERE price > 100;
WHERE price > 100;
