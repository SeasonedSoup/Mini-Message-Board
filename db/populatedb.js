const { Client } = require("pg");

const SQL = `
    CREATE NEW TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
        text VARCHAR(255),
        user VARCHAR(255), 
        date DATE
    );

    INSERT INTO messages (text, user, date) 
    VALUES 
        ('I like waffles', 'Bryan', '2025-10-28'),
        ('Hello World!', 'Odin', '2022-07-22'),
        ('Hi What is your name?', 'Damon', 2024-09-26);
`
