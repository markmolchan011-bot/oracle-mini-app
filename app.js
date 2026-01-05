const orb = document.getElementById("orb");
const card = document.getElementById("card");
const text = document.getElementById("text");

// персонажи
const characters = {
  ganvest: {
    name: "Ганвест",
    phrases: [
      "День пойдёт по кайфу, если не тупить.",
      "Сегодня ты на флоу, просто не сбавляй.",
      "День про деньги и движение.",
      "Не ссы — ты сегодня главный.",
      "Кто понял — тот понял."
    ]
  },
  pepeRich: {
    name: "Пэпэ богатый",
    phrases: [
      "Деньги любят тишину, но сегодня они шумят.",
      "Сегодня профит сам идёт в руки.",
      "Инвестируй в себя, остальное подтянется.",
      "Лягушка видит шанс — лягушка берёт."
    ]
  },
  pepePoor: {
    name: "Пэпэ бедный",
    phrases: [
      "Ну такое… но могло быть хуже.",
      "Сегодня без резких движений.",
      "Живём, брат, просто живём.",
      "Это опыт, не провал."
    ]
  },
  shneyn: {
    name: "Шнейн",
    phrases: [
      "Реальность сегодня поплывёт.",
      "Ты это видел? Вот и я нет.",
      "День странный, но запомнится.",
      "Смысл появится потом."
    ]
  },
  watafa: {
    name: "Ватафа",
    phrases: [
      "ЧТО.",
      "Это вообще законно?",
      "День сломался, но красиво.",
      "Не задавай вопросов."
    ]
  },
  entus: {
    name: "Ентус",
    phrases: [
      "АААА зачем я встал.",
      "Меня бесит буквально всё.",
      "Кринж день, но ты выживешь.",
      "Ладно… не самый худший вариант."
    ]
  }
};

function getTodayKey() {
  const d = new Date();
  return `oracle-${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

orb.addEventListener("click", () => {
  const key = getTodayKey();
  let saved = localStorage.getItem(key);

  if (saved) {
    text.innerText = saved;
  } else {
    const chars = Object.values(characters);
    const char = chars[Math.floor(Math.random() * chars.length)];
    const phrase = char.phrases[Math.floor(Math.random() * char.phrases.length)];
    const result = `${char.name}: ${phrase}`;

    localStorage.setItem(key, result);
    text.innerText = result;
  }

  card.classList.remove("hidden");
  orb.style.transform = "scale(1.1)";
  setTimeout(() => (orb.style.transform = "scale(1)"), 200);
});
