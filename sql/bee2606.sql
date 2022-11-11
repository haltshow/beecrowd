select p.name, pr.name 
from products as p 
inner join providers as pr on pr.id = p.id_providers 
where p.id_categories = 6