const { Client } = require("pg");
require("dotenv").config();
const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
        text VARCHAR(255),
        username VARCHAR(255), 
        date DATE
    );

    INSERT INTO messages (text, username, date) 
    VALUES 
        ('I like waffles', 'Bryan', '2025-10-28'),
        ('Hello World!', 'Odin', '2022-07-22'),
        ('Hi What is your name?', 'Damon', '2024-09-26');
`


async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: process.env.DB_INTERNAL_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end()
    console.log('finish populating db');
}

main();