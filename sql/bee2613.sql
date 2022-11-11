-- CREATE TABLE rentals(
-- 	id INT(10) AUTO_INCREMENT,
-- 	rentals_date DATE,
-- 	id_customers INT(10),
-- 	PRIMARY KEY (id),
-- 	FOREIGN KEY (id_customers) REFERENCES customers(id) ON UPDATE CASCADE ON DELETE SET NULL
-- );

SELECT m.id, m.name 
FROM movies AS m
INNER JOIN prices AS p ON p.id = m.id_prices
WHERE p.value < 2