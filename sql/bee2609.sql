SELECT c.name, SUM(p.amount)
FROM products AS p, categories AS c 
WHERE p.id_categories = c.id
GROUP BY c.name