const orb = document.getElementById("orb");
const card = document.getElementById("card");
const text = document.getElementById("text");

// ================== ПЕРСОНАЖИ ==================

const characters = [
  {
    name: "Ганвест",
    img: "ganvest.png",
    fillers: ["пэпэ", "шнейне"],
    phrases: [
      "Двигайся спокойно пэпэ фокус решает шнейне",
      "Сегодня по кайфу пэпэ без суеты шнейне",
      "Не тупи пэпэ день твой шнейне",
      "День про движение пэпэ и деньги шнейне",
      "Ты главный пэпэ просто делай шнейне"
    ]
  },
  {
    name: "Пэпэ богатый",
    img: "pepe-rich.png",
    fillers: ["пэпэ"],
    phrases: [
      "Деньги любят тишину пэпэ",
      "Лягушка видит шанс пэпэ и берет",
      "Сегодня профит сам идет пэпэ",
      "Инвестируй в себя пэпэ",
      "Не суетись пэпэ деньги рядом"
    ]
  },
  {
    name: "Пэпэ бедный",
    img: "pepe-poor.png",
    fillers: ["пэпэ"],
    phrases: [
      "Ну такое пэпэ но бывает",
      "Живем пэпэ как можем",
      "Сегодня без резких движений пэпэ",
      "Это опыт пэпэ не провал",
      "Завтра будет лучше пэпэ"
    ]
  },
  {
    name: "Шнейне",
    img: "shneyne.png",
    fillers: ["шнейне"],
    phrases: [
      "Реальность сегодня плывет шнейне",
      "Ты это видел шнейне",
      "День странный шнейне но запомнится",
      "Смысл появится позже шнейне",
      "Не пытайся понять шнейне"
    ]
  },
  {
    name: "Ватафа",
    img: "watafa.png",
    fillers: ["ватафа"],
    phrases: [
      "Что",
      "Это вообще законно",
      "Я не понял",
      "Ватафа происходит",
      "Мир сломался"
    ]
  }
];

// ================== ЛОГИКА ==================

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

orb.addEventListener("click", () => {
  const character = random(characters);
  let phrase = random(character.phrases);

  // добавляем слова-сорняки
  if (character.fillers.length) {
    phrase += " " + random(character.fillers);
  }

  text.innerHTML = `
    <strong>${character.name}</strong><br><br>
    ${phrase}
  `;

  card.classList.remove("hidden");

  orb.style.transform = "scale(1.05)";
  setTimeout(() => {
    orb.style.transform = "scale(1)";
  }, 200);
});
