SELECT m.id, m.NAME 
FROM movies AS m
INNER JOIN genres AS g ON g.id = m.id_genres
WHERE g.description = 'Action'