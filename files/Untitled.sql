
CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
	title VARCHAR(250),
    steps TEXT,
    ingredients TEXT
);


-- Fetch all recipes.
SELECT * FROM recipes

-- DELETE
DELETE FROM recipes
WHERE id = 2;







