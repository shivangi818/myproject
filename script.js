// 🔢 Mood Counter
let moodCount = 0;

// 📊 Mood Level
let moodLevel = 0;

function changeMood() {

    const moods = [
        { color: "lightblue", text: "Feeling Calm 😌🌊" },
        { color: "lightpink", text: "Feeling Lovely 💕😊" },
        { color: "lightgreen", text: "Feeling Fresh 🌿✨" },
        { color: "orange", text: "Feeling Energetic ⚡🔥" },
        { color: "purple", text: "Feeling Creative 🎨💡" },
        { color: "yellow", text: "Feeling Happy 😄🌞" },
        { color: "skyblue", text: "Feeling Free 🕊️💙" },
        { color: "gold", text: "Feeling Confident 👑💪" },
        { color: "peachpuff", text: "Feeling Cozy ☕🧸" },
        { color: "turquoise", text: "Feeling Positive 🌈✨" },
        { color: "#ff6b6b", text: "Drama Mode On 🎭😜" },
        { color: "#6a89cc", text: "Deep Thinking 🧠💭" },
        { color: "#38ada9", text: "Zen Mode 🧘‍♂️✨" },
        { color: "#f8c291", text: "Foodie Mood 🍕🍔" },
        { color: "#b8e994", text: "u r just like woww 🌳🌼" },
        { color: "#e55039", text: "Savage Mode 😎🔥" },
        { color: "#1e3799", text: "Sleep is gold 😴✨ Wake up early, champ!" },
        { color: "#fad390", text: "Sunshine Vibes 🌞🌻" },
        { color: "#78e08f", text: "Do Workout Daily 💪🏋️" },
        { color: "#f6b93b", text: "Party Time 🎉🕺" },
        { color: "#82ccdd", text: "Chill Chill ❄️😌" },
        { color: "#b71540", text: "Romantic Mood 💘🌹" },
        { color: "#60a3bc", text: "u r a Ocean Soul 🌊🐚" },
        { color: "#e58e26", text: "Adventure Mode!! Go out of the class and have fun ! Its Fridayy 🚀🌍" },
        { color: "#c44569", text: "Coffee Mood ☕💖 Sip, smile, repeat!" },
        { color: "#079992", text: "Focused Mode 📚✏️" }
    ];

    const random = moods[Math.floor(Math.random() * moods.length)];

    // 🎨 Background + Text
    document.body.style.backgroundColor = random.color;
    document.getElementById("mood").innerText = random.text;

    // 🌙 Auto Dark Mode
    if (random.text.includes("Night") || random.text.includes("Sleep")) {
        document.body.style.color = "white";
    } else {
        document.body.style.color = "black";
    }

    // 🎉 Confetti
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });

    // 😄 Emoji Rain
    createEmojiRain();

    // 📝 Add to History
    addToHistory(random.text);

    // 🔢 Increase Counter
    moodCount++;
    document.getElementById("counter").innerText =
        "Mood changed " + moodCount + " times 😎";

    // 📊 Increase Mood Level
    moodLevel += 10;
    if (moodLevel > 100) moodLevel = 0;
    document.getElementById("bar").style.width = moodLevel + "%";

    // 🔊 Sound
    document.getElementById("clickSound").play();

    // 😂 Funny Popup (single alert)
    const jokes = [
        "Smile karo tax nahi lagta 😄",
        "Aaj ka din tumhara hai 🔥",
        "Stress ko bolo tata 👋",
        "Tum legend ho 😎"
    ];
    alert(jokes[Math.floor(Math.random() * jokes.length)]);
}

// 😄 Emoji Rain Function
function createEmojiRain() {
    const emojis = ["😄","🎉","✨","🔥","🌈","💖","😎"];
    for (let i = 0; i < 10; i++) {
        const emoji = document.createElement("div");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = "fixed";
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.top = "-20px";
        emoji.style.fontSize = "30px";
        emoji.style.animation = "fall 2s linear";
        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), 2000);
    }
}

// 📝 History Function
function addToHistory(text) {
    const li = document.createElement("li");
    li.innerText = text;
    document.getElementById("history").appendChild(li);
}