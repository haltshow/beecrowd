SELECT c.name, r.rentals_date
FROM customers AS c
INNER JOIN rentals AS r ON r.id_customers = c.id
WHERE r.rentals_date BETWEEN '2016-09-01' AND '2016-09-30'