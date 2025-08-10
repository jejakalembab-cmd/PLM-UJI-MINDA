const fetch = require('node-fetch');

const token = '8455290608:AAGXLwiMBjnm9x2_v5b5-QWmMeK6QIjYQYI';  // Token dari BotFather
const chatId = '2046254899';  // Chat ID pengguna yang diperoleh

module.exports = async (req, res) => {
    const players = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/')
        .then(response => response.json())
        .then(data => data.elements); // Ambil semua pemain dari FPL

    const randomPlayer = players[Math.floor(Math.random() * players.length)];

    const clue = `Pemain ini bermain untuk ${randomPlayer.team_name} dan telah menjaringkan ${randomPlayer.goals_scored} gol. Siapakah dia?`;

    // Hantar mesej ke Telegram menggunakan Telegram Bot API
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        body: JSON.stringify({
            chat_id: chatId,
            text: clue
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    res.status(200).send('Clue sent to Telegram!');
};
