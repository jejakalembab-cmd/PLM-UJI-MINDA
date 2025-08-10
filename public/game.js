document.addEventListener('DOMContentLoaded', function () {
    // Senarai soalan dan jawapan yang mencabar
    const questions = [
        { clue: "Pemain yang menjadi penjaga gol pertama yang mencatatkan 100 clean sheets untuk Manchester City dalam EPL.", answer: "Ederson" },
        { clue: "Pemain yang berjaya menjaringkan gol pembukaan dalam final Piala FA 2021 antara Leicester City dan Chelsea.", answer: "Youri Tielemans" },
        { clue: "Penyerang yang memenangi anugerah Golden Boot pada musim 2020/2021 dengan 23 gol dan bermain untuk Tottenham Hotspur.", answer: "Harry Kane" },
        { clue: "Pemain yang dikenali dengan keupayaan untuk mengelak daripada offside trap dan bermain untuk Manchester United.", answer: "Marcus Rashford" },
        { clue: "Pemain yang berasal dari Brazil dan merupakan pemain tengah utama untuk Liverpool sejak 2015.", answer: "Fabinho" },
        { clue: "Pemain yang mencipta rekod sebagai pemain pertama yang menjaringkan gol dalam 6 perlawanan berturut-turut untuk Leeds United pada 2021.", answer: "Patrick Bamford" },
        { clue: "Pemain pertahanan yang memenangi anugerah Pemain Terbaik Tahun Ini EPL pada 2020 dan bermain untuk Liverpool.", answer: "Virgil van Dijk" },
        { clue: "Pemain sayap yang memenangi dua kali Anugerah Pemain Terbaik Tahunan PFA pada 2018 dan 2021, dan bermain untuk Manchester City.", answer: "Raheem Sterling" },
        { clue: "Pemain yang menjadi pemain tengah pertama untuk mencatatkan 100 assist dalam EPL, bermain untuk Manchester City.", answer: "Kevin De Bruyne" },
        { clue: "Pemain yang menjadi penjaga gol pertama yang mencatatkan 15 clean sheets dalam satu musim untuk Chelsea sejak 2014.", answer: "Kepa Arrizabalaga" },
        { clue: "Pemain yang menjaringkan gol kemenangan untuk Manchester United dalam final Liga Europa 2021.", answer: "Bruno Fernandes" },
        { clue: "Pemain pertahanan yang berjaya menjaringkan gol dalam 3 final Piala FA berturut-turut (2017-2019).", answer: "Ashley Young" },
        { clue: "Penyerang yang menjadi penjaring gol terbanyak untuk Arsenal sejak Thierry Henry.", answer: "Pierre-Emerick Aubameyang" },
        { clue: "Pemain yang menjadi pemain pertama dalam sejarah EPL untuk menjaringkan gol di setiap stadium EPL pada 2020.", answer: "Mohamed Salah" },
        { clue: "Pemain yang menjadi pemain pertama dalam sejarah EPL untuk membuat lebih daripada 300 penampilan dan mencatatkan lebih 100 gol untuk Chelsea.", answer: "Frank Lampard" },
        { clue: "Pemain tengah yang dikenali dengan keupayaan untuk mengawal tempo permainan dan bermain untuk Manchester United.", answer: "Bruno Fernandes" },
        { clue: "Pemain pertahanan yang memenangi anugerah Pemain Terbaik EPL musim 2020-2021 dan bermain untuk Manchester City.", answer: "Ruben Dias" },
        { clue: "Penyerang yang berjaya menjaringkan lebih daripada 100 gol untuk Liverpool sejak 2017.", answer: "Mohamed Salah" },
        { clue: "Pemain yang bermain untuk Tottenham Hotspur dan menjadi pemain pertama yang mencatatkan 100 assist di EPL pada 2021.", answer: "Harry Kane" },
        { clue: "Pemain sayap yang menjadi pemain pertama untuk menjaringkan lebih daripada 25 gol dalam satu musim untuk Manchester United sejak 2012.", answer: "Jadon Sancho" },
        { clue: "Pemain pertahanan yang memenangi anugerah Pemain Terbaik dalam kejohanan Liga Juara-Juara UEFA pada 2021 dan bermain untuk Chelsea.", answer: "Thiago Silva" },
        { clue: "Pemain yang mencipta sejarah sebagai pemain pertama yang menjaringkan 100 gol EPL untuk Arsenal dalam lebih daripada 4 musim.", answer: "Alexandre Lacazette" },
        { clue: "Penyerang yang menjadi pemain pertama untuk menjaringkan gol dalam 4 final berturut-turut di EPL pada 2020.", answer: "Danny Ings" },
        { clue: "Pemain yang merupakan penjaga gol pertama dalam sejarah EPL yang mencatatkan 10 penyelamatan terhebat dalam satu musim.", answer: "Nick Pope" },
        { clue: "Pemain yang terkenal dengan teknik kaki kiri dan menjaringkan gol gol menakjubkan untuk Tottenham Hotspur.", answer: "Son Heung-min" },
        { clue: "Pemain sayap yang berjaya memenangi anugerah Pemain Terbaik Tahun Ini EPL pada 2020 dan bermain untuk Manchester City.", answer: "Raheem Sterling" },
        { clue: "Pemain pertahanan yang mencatatkan rekod pertahanan terkuat dalam sejarah EPL bersama Liverpool pada 2019.", answer: "Virgil van Dijk" },
        { clue: "Pemain yang berasal dari Denmark dan bermain untuk Tottenham Hotspur, dikenali dengan keupayaan tendangan percuma.", answer: "Christian Eriksen" },
        { clue: "Pemain yang menjadi penjaga gol pertama yang memenangi anugerah Pemain Terbaik EPL pada 2020 dan bermain untuk Liverpool.", answer: "Alisson Becker" },
        { clue: "Penyerang yang terkenal dengan ketepatan penalti dan bermain untuk Manchester United pada 2021.", answer: "Bruno Fernandes" },
        { clue: "Pemain tengah yang bermain untuk Manchester United dan berjaya mencatatkan lebih daripada 50 assist dalam EPL pada 2021.", answer: "Paul Pogba" },
        { clue: "Pemain yang bermain untuk Leeds United dan menjadi pemain pertama yang mencatatkan lebih daripada 30 gol dalam satu musim EPL sejak 2019.", answer: "Patrick Bamford" },
        { clue: "Pemain sayap yang memenangi anugerah Pemain Terbaik Tahunan EPL pada 2020 dan bermain untuk Manchester City.", answer: "Raheem Sterling" },
        { clue: "Pemain pertahanan yang memenangi anugerah Pemain Terbaik dalam kejohanan Liga Juara-Juara UEFA pada 2021 dan bermain untuk Chelsea.", answer: "Thiago Silva" },
        { clue: "Pemain yang mencipta sejarah sebagai pemain pertama yang menjaringkan 100 gol EPL untuk Arsenal dalam lebih daripada 4 musim.", answer: "Alexandre Lacazette" }
    ];

    let score = 0;
    let currentQuestion = 0;
    let wrongAttempts = 0;
    const maxWrongAttempts = 3;

    // Mengambil elemen-elemen HTML
    const questionText = document.getElementById('question-text');
    const answerInput = document.getElementById('answer-input');
    const submitButton = document.getElementById('submit-answer');
    const attemptsText = document.getElementById('attempts');
    const scoreText = document.getElementById('score');
    const messageText = document.getElementById('message');

    // Fungsi untuk memaparkan soalan
    function displayQuestion() {
        if (currentQuestion < questions.length) {
            const question = questions[currentQuestion];
            questionText.textContent = question.clue;  // Papar petunjuk untuk soalan
            answerInput.value = '';  // Reset input field
            messageText.textContent = '';  // Reset message
            attemptsText.textContent = `Percubaan: ${wrongAttempts}/${maxWrongAttempts}`;
        } else {
            messageText.textContent = `Permainan Tamat! Skor akhir anda: ${score}`;
            submitButton.disabled = true; // Disable button apabila permainan tamat
        }
    }

    // Fungsi untuk memproses jawapan
    function checkAnswer() {
        const userAnswer = answerInput.value.trim();
        const correctAnswer = questions[currentQuestion].answer;

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            score++;
            scoreText.textContent = `Skor: ${score}`;
            messageText.textContent = 'Betul! Skor anda meningkat.';
            currentQuestion++;
            wrongAttempts = 0; // Reset percubaan salah
            displayQuestion(); // Papar soalan seterusnya
        } else {
            wrongAttempts++;
            attemptsText.textContent = `Percubaan: ${wrongAttempts}/${maxWrongAttempts}`;
            if (wrongAttempts >= maxWrongAttempts) {
                messageText.textContent = `3 percubaan salah! Jawapan yang betul: ${correctAnswer}`;
                currentQuestion++; // Soalan seterusnya
                wrongAttempts = 0; // Reset percubaan salah
                displayQuestion();
            } else {
                messageText.textContent = 'Salah! Cuba lagi.';
            }
        }
    }

    // Menetapkan fungsi untuk butang "Submit"
    submitButton.addEventListener('click', checkAnswer);

    // Mulakan permainan dengan memaparkan soalan pertama
    displayQuestion();
});