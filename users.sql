CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email, password)
VALUES ('John Doe', 'johndoe@example.com', 'password123'),
       ('Jane Smith', 'janesmith@example.com', 'password456'),
       ('Bob Johnson', 'bobjohnson@example.com', 'password789');
