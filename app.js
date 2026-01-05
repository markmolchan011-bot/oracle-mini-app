// ==================
// ЭЛЕМЕНТЫ
// ==================
const orb = document.getElementById("orb");
const card = document.getElementById("card");
const text = document.getElementById("text");
const avatar = document.getElementById("avatar");
const nameEl = document.getElementById("name");

// ==================
// ПЕРСОНАЖИ
// ==================
const characters = {
  ganvest: {
    name: "Ганвест",
    color: "linear-gradient(135deg, #ff6a00, #ff2e2e)",
    phrases: [
      "Двигайся спокойно",
      "Фокус решает",
      "Сегодня не суетись",
      "Все придёт вовремя",
      "Ты уже на пути",
      "Не дергайся раньше времени",
      "Спокойствие — это сила"
    ],
    weeds: ["пэпэ", "шнейне", "фааа"]
  },

  pepeRich: {
    name: "Пэпэ богатый",
    color: "linear-gradient(135deg, #3cff9e, #0f9b5f)",
    phrases: [
      "Деньги любят тишину",
      "Сегодня профит сам идёт в руки",
      "Инвестируй в себя",
      "Ты думаешь как победитель",
      "Рынок вознаграждает терпеливых"
    ]
  },

  pepePoor: {
    name: "Пэпэ бедный",
    color: "linear-gradient(135deg, #9b9b9b, #4f4f4f)",
    phrases: [
      "Ну такое… но бывало и хуже",
      "Сегодня без резких движений",
      "Это опыт, не провал",
      "Живём, брат",
      "Завтра будет шанс"
    ]
  },

  shneyn: {
    name: "Шнейн",
    color: "linear-gradient(135deg, #7f7cff, #3a36d6)",
    phrases: [
      "Реальность сегодня поплывёт",
      "Смысл появится потом",
      "День странный, но важный",
      "Не пытайся понять",
      "Это точно было задумано?"
    ]
  },

  watafa: {
    name: "Ватафа",
    color: "linear-gradient(135deg, #ff3c7e, #9b1d4a)",
    phrases: [
      "Что.",
      "Это вообще законно?",
      "Как мы сюда пришли?",
      "Я не уверен что это реально",
      "Ладно… допустим"
    ]
  }
};

// ==================
// УТИЛИТЫ
// ==================
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function addGanvestWeeds(phrase, weeds) {
  const words = phrase.split(" ");
  const result = [];

  words.forEach(word => {
    result.push(word);
    if (Math.random() < 0.5) {
      result.push(random(weeds));
    }
  });

  return result.join(" ");
}

// ==================
// КЛИК ПО СФЕРЕ
// ==================
orb.addEventListener("click", () => {
  const keys = Object.keys(characters);
  const key = random(keys);
  const character = characters[key];

  let phrase = random(character.phrases);

  // ⚠️ СОРНЯКИ ТОЛЬКО У ГАНВЕСТА
  if (key === "ganvest") {
    phrase = addGanvestWeeds(phrase, character.weeds);
  }

  // UI
  nameEl.textContent = character.name;
  text.textContent = phrase;
  avatar.style.background = character.color;

  card.classList.remove("hidden");

  // лёгкая анимация
  orb.style.transform = "scale(0.95)";
  setTimeout(() => {
    orb.style.transform = "scale(1)";
  }, 120);
});
