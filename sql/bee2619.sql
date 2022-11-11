select p.name, pr.name, p.price
from products as p
inner join providers as pr on pr.id = p.id_providers
inner join categories as c on c.id = p.id_categories
WHERE p.price > 1000 AND c.name='Super Luxury'