// Имя маленькими буквами → текст приветствия
const greetings = {
  azam: "Ozim qilgan saytda ozimni ismimni kiritish yaxwimas lekin",
  shahzoda: "shaxoniya_ пошла нахуй, тебе тут не место. выйди нахуй из моего сайта.",
  shaxzoda: "shaxoniya_ пошла нахуй, тебе тут не место. выйди нахуй из моего сайта.",
  shamshod: "Qalesan Shamshod ishlarin yaxwimi, da sani 1 ga 1 Борьба da yutomiman.",
  saidahror: "Said qalesan, esindan chiqmasin sandan tezro yuguraman.",
  elshod: "Elshod qalesan, Saidni shkafga tiqilu? (hazil shkaf ni eshigi singan ku)",
  sarvar: "Sarvar qalesan iwlarin yaxwimi.",
  aziz: "Aziz qalesan yaxwimisan tuzumisan.",
  diyor: "Diyor qalesan hammasi yaxwimi tuzumisan.",
  xamidullo: "Xamidulloja qalesan ishlarin yaxwimi.",
  xamidulloja: "Xamidulloja qalesan ishlarin yaxwimi.",
  sadoqat: "Assalomu Alaykum yaxwimisiz tuzumisiz ishlariz yaxwimi.",
  sadokat: "Assalomu Alaykum yaxwimisiz tuzumisiz ishlariz yaxwimi.",
  shaxnoza: "Assalomu alaykum man tashagan kinolarni korvossizmi?",
  shahnoza: "Assalomu alaykum man tashagan kinolarni korvossizmi?",
  farzona: "idish tovogimni yuvib ber please",
  maryam: "Доброго времени суток как жизнь, дела как.",
  mariyam: "Доброго времени суток как жизнь, дела как.",
  omina: "3 ta Omina ismli qizni taniman qaysi biri?",
  abbos: "Abbos qalesan iwlarin, uydigila yaxwimi.",
  yoqub: "Qalesan jigarim yaxwimisan ishlawin yaxwimi",
  sharifjon: "assalomu alaykum toga yaxwimisiz tuzumisiz uydigila yaxwimi",
  sofia: "София здарова как дела",
  sofiya: "София здарова как дела",
  gleb: "Глеб почему ты всегда улыбаешься?"
};

// Для всех остальных имён
const defaultGreeting = (name) => `Salom ${name}`;

const nameInput = document.getElementById("name");
const errorEl = document.getElementById("error");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const resultEl = document.getElementById("result");

function show(text) {
  resultEl.textContent = text;
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
}

function submitName() {
  const name = nameInput.value.trim().toLowerCase();
  if (!name) { errorEl.textContent = "Введите имя"; return; }
  errorEl.textContent = "";
  if (!/^[a-z]+$/.test(name)) { show("ИМЯ ПИСАТЬ ТОЛЬКО АНГЛИСКИМИ БУКВАМИ"); return; }
  show(Object.prototype.hasOwnProperty.call(greetings, name) ? greetings[name] : defaultGreeting(name));
}

document.getElementById("ok").addEventListener("click", submitName);
nameInput.addEventListener("keydown", (e) => { if (e.key === "Enter") submitName(); });
document.getElementById("back").addEventListener("click", () => {
  nameInput.value = "";
  screen2.classList.add("hidden");
  screen1.classList.remove("hidden");
  nameInput.focus();
});
