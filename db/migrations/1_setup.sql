DROP TABLE IF EXISTS bus;

CREATE TABLE bus (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    capacity INT NOT NULL
);