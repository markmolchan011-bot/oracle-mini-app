const orb = document.getElementById("orb");
const card = document.getElementById("card");
const text = document.getElementById("text");

// ==================
// ПЕРСОНАЖИ
// ==================
const characters = {
  ganvest: {
    name: "Ганвест",
    phrases: [
      "Двигайся спокойно",
      "Фокус решает",
      "Сегодня не суетись",
      "Все придёт вовремя",
      "Не дергайся раньше времени",
      "Спокойствие — это сила",
      "Ты уже на пути",
      "Не спеши — увидишь больше"
    ]
  },

  pepeRich: {
    name: "Пэпэ богатый",
    phrases: [
      "Деньги любят тишину",
      "Прибыль приходит к терпеливым",
      "Сегодня профит сам идёт в руки",
      "Инвестируй в себя",
      "Рынок вознаграждает хладнокровных",
      "Ты думаешь как победитель"
    ]
  },

  pepePoor: {
    name: "Пэпэ бедный",
    phrases: [
      "Ну такое… но бывало и хуже",
      "Сегодня без резких движений",
      "Живём, брат",
      "Это опыт, не провал",
      "Завтра будет шанс"
    ]
  },

  shneyn: {
    name: "Шнейн",
    phrases: [
      "Реальность сегодня поплывёт",
      "Ты это видел? Вот и я нет",
      "День странный, но запомнится",
      "Смысл появится потом",
      "Это точно было задумано?"
    ]
  },

  watafa: {
    name: "Ватафа",
    phrases: [
      "Что.",
      "Это вообще законно?",
      "Я не уверен что это реально",
      "Как мы сюда пришли?",
      "Ладно… допустим"
    ]
  }
};

// ==================
// СЛОВА-СОРНЯКИ
// ТОЛЬКО ДЛЯ ГАНВЕСТА
// ==================
const ganvestWeeds = ["пэпэ", "шнейне", "фааа"];

// ==================
// ФУНКЦИЯ: добавить сорняки
// ==================
function addGanvestWeeds(phrase) {
  const words = phrase.split(" ");
  let result = [];

  words.forEach(word => {
    result.push(word);

    // шанс вставить сорняк после слова
    if (Math.random() < 0.5) {
      result.push(
        ganvestWeeds[Math.floor(Math.random() * ganvestWeeds.length)]
      );
    }
  });

  return result.join(" ");
}

// ==================
// КЛИК ПО СФЕРЕ
// ==================
orb.addEventListener("click", () => {
  const characterKeys = Object.keys(characters);
  const randomCharacterKey =
    characterKeys[Math.floor(Math.random() * characterKeys.length)];

  const character = characters[randomCharacterKey];

  const phrase =
    character.phrases[
      Math.floor(Math.random() * character.phrases.length)
    ];

  let finalText = phrase;

  // ⚠️ ВАЖНО:
  // СОРНЯКИ ТОЛЬКО У ГАНВЕСТА
  if (randomCharacterKey === "ganvest") {
    finalText = addGanvestWeeds(phrase);
  }

  card.classList.remove("hidden");
  text.textContent = `${character.name}: ${finalText}`;
});
