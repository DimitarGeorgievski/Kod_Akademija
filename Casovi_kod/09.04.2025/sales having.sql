-- HAVING

-- basic example
SELECT category COUNT(*) AS sale_count FROM sales
GROUP BY category
HAVING COUNT(*) > 2;-- filter na grupirana data

SELECT product_name, SUM (amount) AS tota_sales FROM sales
GROUP BY product_name
HAVING SUM(amount) > 1000;

SELECT category, COUNT (*) AS sale_count, AVG(amount) AS avg_sale FROM sales
GROUP BY category
HAVING COUNT(*) > 2 AND AVG(amount) > 100;