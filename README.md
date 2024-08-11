Create a postgres called recipes, and a table:

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
	title VARCHAR(250),
    steps TEXT,
    ingredients TEXT
);

server env:
NODE_ENV = development
PORT = 8000
DB_USER: postgres
DB_PASSWORD: ***
DB_HOST: localhost
DB_PORT: 5432
DB_DATABASE: recipes

then:
server: cd server >> npm run dev

client: cd client >> npm run dev
