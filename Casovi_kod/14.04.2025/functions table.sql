CREATE OR REPLACE FUNCTION calculate_shipping_cost(
	weight DECIMAL,
	distance DECIMAL,
	is_express BOOLEAN DEFAULT FALSE
)
RETURNS DECIMAL AS $$
DECLARE
	base_rate DECIMAL := 5.0;
	weight_rate DECIMAL:=0.50;
	distance_rate DECIMAL:=0.10;
	express_multiplier DECIMAL := 1.5;
BEGIN	
	RETURN (base_rate + (weight * weight_rate)+ (distance * distance_rate)) * 
			CASE WHEN is_express THEN express_multiplier ELSE 1 END;
END;
$$ LANGUAGE plpgsql;

SELECT calculate_shipping_cost(3,100);
SELECT calculate_shipping_cost(3,100, TRUE);

CREATE OR REPLACE FUNCTION get_total_sales_per_product()
RETURNS TABLE(
	product_name VARCHAR,
	total_quantity INTEGER,
	total_revenue NUMERIC(10,2)
)
LANGUAGE plpgsql
AS $$
BEGIN 
	RETURN QUERY 
	SELECT s.product_name,
	SUM(s.quantity):: INTEGER AS total_quantity,
	SUM(s.quantity * s.unit_price) AS total_revenue
	FROM sales s
	GROUP BY s.product_name
	ORDER BY total_revenue DESC;
END;
$$;

SELECT * FROM  get_total_sales_per_product();


-- razlika izmegju varchar i char, ako imame klaeno 20 i imeto e 5 dolzina tolku zema a char ako e 20 a ima 5 ke zavzemi pak 20. Interview question