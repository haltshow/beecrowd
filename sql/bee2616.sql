SELECT c.id, c.name
FROM customers c
WHERE NOT EXISTS(select id_customers from locations where id_customers = c.id)
ORDER BY c.id