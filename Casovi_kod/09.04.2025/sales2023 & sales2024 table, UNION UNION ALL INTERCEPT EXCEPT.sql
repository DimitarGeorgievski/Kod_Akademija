-- UNION - za bez duplikati, UNION ALL so duplikati 
SELECT product_name FROM sales_2023
UNION 
SELECT product_name FROM sales_2024;

-- UNION ALL
SELECT product_name FROM sales_2023
UNION ALL
SELECT product_name FROM sales_2024;

-- INTERSECT - vraka podatok so go ima samo vo 2te tabeli
SELECT product_name FROM sales_2023
INTERSECT
SELECT product_name FROM sales_2024;

-- EXCEPT - produkti so gi ima vo prvata tabela a gi nema vo vtorata 
SELECT product_name FROM sales_2023
EXCEPT
SELECT product_name FROM sales_2024;

-- JOINS
-- 