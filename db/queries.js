const pool = require('./pool')

async function getAllMessages() {
    const { rows } = await pool.query("SELECT text FROM messages");
    return rows;
}

async function createMessage(name, message) {
    await pool.query("INSERT INTO messages (text, user, date) VALUES($1, $2, NOW())", [message, name])
}

module.exports = { getAllMessages, createMessage }