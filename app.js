const orb = document.getElementById("orb");
const card = document.getElementById("card");
const text = document.getElementById("text");

const predictions = [
  "Сегодня не спеши — нужное придёт само.",
  "Ты ближе к цели, чем думаешь.",
  "Отпусти контроль — день сложится лучше.",
  "Сделай маленький шаг, он окажется решающим.",
  "Кто-то сегодня думает о тебе.",
  "Доверься интуиции, а не логике.",
  "Лучшее решение — самое простое.",
  "Тишина сегодня важнее слов.",
  "Ты входишь в сильный период.",
  "Ответ уже внутри тебя."
];

function getTodayKey() {
  const d = new Date();
  return `oracle-${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

orb.addEventListener("click", () => {
  const key = getTodayKey();
  let saved = localStorage.getItem(key);

  let prediction;
  if (saved) {
    prediction = saved;
  } else {
    prediction = predictions[Math.floor(Math.random() * predictions.length)];
    localStorage.setItem(key, prediction);
  }

  orb.style.transform = "scale(1.04)";
  setTimeout(() => orb.style.transform = "scale(1)", 200);

  text.textContent = prediction;
  card.classList.remove("hidden");

  if (window.Telegram?.WebApp) {
    Telegram.WebApp.HapticFeedback.impactOccurred("light");
  }
});
