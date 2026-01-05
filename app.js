const orb = document.getElementById("orb");
const card = document.getElementById("card");
const text = document.getElementById("text");
const avatar = document.getElementById("avatar");
const nameEl = document.getElementById("name");

let lastPhrase = "";

const characters = [
  {
    id: "ganvest",
    name: "Ганвест",
    image: "ganvest.png",
    fillers: ["пэпэ", "шнейне", "фааа"],
    phrases: [
      "Двигайся спокойно, пэпэ, фокус решает",
      "Сегодня день про движение, шнейне, не тупи",
      "День качает, фааа, бери своё",
      "Ты ближе к цели, пэпэ, чем думаешь",
      "Не суетись, шнейне, всё уже в процессе",
      "Фааа, просто делай и не сомневайся"
    ]
  },
  {
    id: "pepeRich",
    name: "Пэпэ богатый",
    image: "pepe-rich.png",
    phrases: [
      "Деньги любят тишину",
      "Сегодня профит сам идёт в руки",
      "Лягушка видит шанс — лягушка берёт",
      "Инвестируй в себя",
      "Ты не опоздал, ты вовремя"
    ]
  },
  {
    id: "pepePoor",
    name: "Пэпэ бедный",
    image: "pepe-poor.png",
    phrases: [
      "Ну такое… но могло быть хуже",
      "Сегодня без резких движений",
      "Живём, брат, просто живём",
      "Это опыт, не провал",
      "День странный, но ты держишься"
    ]
  },
  {
    id: "shneyn",
    name: "Шнейн",
    image: "shneyn.png",
    phrases: [
      "Реальность сегодня поплывёт",
      "Ты это видел? Вот и я нет",
      "Смысл появится потом",
      "День странный, но важный",
      "Не пытайся понять — почувствуй"
    ]
  },
  {
    id: "watafa",
    name: "Ватафа",
    image: "watafa.png",
    phrases: [
      "ЧТО.",
      "Это вообще законно?",
      "Я в шоке",
      "Что сейчас произошло?",
      "Ладно… допустим"
    ]
  }
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getPhrase(char) {
  let phrase;
  do {
    phrase = random(char.phrases);
  } while (phrase === lastPhrase);
  lastPhrase = phrase;

  if (char.fillers) {
    if (Math.random() < 0.6) {
      phrase += " " + random(char.fillers);
    }
  }

  return phrase;
}

orb.addEventListener("click", () => {
  const char = random(characters);

  nameEl.textContent = char.name;
  text.textContent = getPhrase(char);
  avatar.src = `./images/${char.image}`;

  orb.style.transform = "scale(0.95)";
  setTimeout(() => {
    orb.style.transform = "scale(1)";
  }, 150);
});
