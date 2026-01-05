// ================= ОСНОВА =================
const orb = document.getElementById("orb");
const card = document.getElementById("card");
const text = document.getElementById("text");

const modeButtons = document.querySelectorAll("[data-mode]");
const characterButtons = document.querySelectorAll("[data-char]");

// ================= УТИЛИТЫ =================
function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// ================= СОСТОЯНИЕ =================
let currentMode = "now";
let currentChar = "ganvest";

const used = {};

// ================= СЛОВА-СОРНЯКИ =================
const ganvestWeeds = ["пэпэ", "шнейне"];

// ================= ПЕРСОНАЖИ И ФРАЗЫ =================
const characters = {
  ganvest: {
    name: "Ганвест",
    weedsChance: 0.3,
    phrases: [
      "Сегодня ты на флоу",
      "День пойдёт ровно",
      "Не суетись — делай",
      "Ты чувствуешь момент",
      "Двигайся спокойно",
      "Решения уже есть",
      "Не смотри назад",
      "Ты в нужном месте",
      "Фокус решает",
      "Просто живи этот день",
      "Ты уже понял всё",
      "День про движение",
      "Никому ничего не доказывай",
      "Доверяй себе",
      "Сохраняй стиль"
    ]
  },

  pepeRich: {
    name: "Пэпэ богатый",
    phrases: [
      "Деньги любят тишину",
      "Ты считаешь ходы правильно",
      "Сегодня день в плюс",
      "Риск оправдан",
      "Спокойствие — капитал",
      "Ты растёшь",
      "Финансы стабильны",
      "Меньше эмоций",
      "Думай на шаг вперёд",
      "Всё идёт как надо"
    ]
  },

  pepePoor: {
    name: "Пэпэ бедный",
    phrases: [
      "День непростой, но норм",
      "Без резких движений",
      "Не сравнивай себя",
      "Ты учишься",
      "Малое сегодня важно",
      "Живём",
      "Это опыт",
      "Терпение — ключ",
      "День как день",
      "Не сдавайся"
    ]
  },

  shnein: {
    name: "Шнейн",
    phrases: [
      "Реальность плывёт",
      "Смысл появится позже",
      "Не ищи логики",
      "Прими странность",
      "Всё неслучайно",
      "Ты наблюдатель",
      "Ответы придут",
      "День про ощущения",
      "Отпусти контроль",
      "Просто будь"
    ]
  },

  watafa: {
    name: "Ватафа",
    phrases: [
      "ЧТО.",
      "Это вообще реально?",
      "Я не понял",
      "Слишком рано для этого",
      "Ладно…",
      "Окей???",
      "Мозг ушёл",
      "Я пас",
      "Ну всё",
      "Без комментариев"
    ]
  }
};

// ================= РЕЖИМЫ =================
const modes = {
  now: { count: [2, 3] },
  today: { count: [1, 1] },
  week: { count: [3, 5] },
  month: { count: [5, 7] }
};

// ================= ЛОГИКА =================
function getPhrases(charKey, amount) {
  const pool = characters[charKey].phrases;

  if (!used[charKey]) used[charKey] = [];
  let available = pool.filter(p => !used[charKey].includes(p));

  if (available.length < amount) {
    used[charKey] = [];
    available = shuffle(pool);
  }

  const picked = shuffle(available).slice(0, amount);
  used[charKey].push(...picked);

  return picked;
}

function applyGanvestWeeds(text) {
  const words = text.split(" ");
  return words
    .map(w => {
      if (Math.random() < characters.ganvest.weedsChance) {
        return w + " " + rand(ganvestWeeds);
      }
      return w;
    })
    .join(" ");
}

function generatePrediction() {
  const mode = modes[currentMode];
  const count =
    rand(
      Array.from(
        { length: mode.count[1] - mode.count[0] + 1 },
        (_, i) => i + mode.count[0]
      )
    );

  let phrases = getPhrases(currentChar, count);

  if (currentChar === "ganvest") {
    phrases = phrases.map(p => applyGanvestWeeds(p));
  }

  return `🧿 ${characters[currentChar].name}\n\n` + phrases.join("\n");
}

// ================= СОБЫТИЯ =================
orb.addEventListener("click", () => {
  text.innerText = generatePrediction();
  card.classList.remove("hidden");

  orb.style.transform = "scale(1.05)";
  setTimeout(() => (orb.style.transform = "scale(1)"), 200);
});

modeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modeButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentMode = btn.dataset.mode;
  });
});

characterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    characterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentChar = btn.dataset.char;
  });
});
