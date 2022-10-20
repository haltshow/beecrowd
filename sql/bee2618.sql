select p.name, pr.name, c.name
from products as p
inner join providers as pr on pr.id = p.id_providers
inner join categories as c on c.id = p.id_categories
where pr.name = "Sansul SA" and c.name="Imported"