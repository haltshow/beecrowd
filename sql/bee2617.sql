SELECT  p.name, pr.name 
FROM products AS p
INNER JOIN providers AS pr ON p.id_providers = pr.id
WHERE pr.name='Ajax SA'