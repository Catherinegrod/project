let stihi = [
  {
    id: 1,
    nazvanie: "У лукоморья дуб зелёный",
    avtor: "А.С. Пушкин",
    janr: "Баллада",
    epoha: "Романтизм"
  },
  {
    id: 2,
    nazvanie: "Зимнее утро",
    avtor: "А.С. Пушкин",
    janr: "Лирика",
    epoha: "Романтизм"
  },
  {
    id: 3,
    nazvanie: "Бородино",
    avtor: "М.Ю. Лермонтов",
    janr: "Эпопея",
    epoha: "Романтизм"
  }
];

// Функция, которая показывает все стихи
function pokazat_vse_stihi() {
  let spisok = document.getElementById("spisok_stihov");
  spisok.innerHTML = ""; // очищаем список

  for (let i = 0; i < stihi.length; i++) {
    let stih = stihi[i];
    let blok = document.createElement("div");
    blok.innerHTML = `
      <h3>` + stih.nazvanie + `</h3>
      <p>Автор: ` + stih.avtor + `, Жанр: ` + stih.janr + `, Эпоха: ` + stih.epoha + `</p>
      <button onclick="pereiti_k_stihu(` + stih.id + `)">Открыть</button>
    `;
    spisok.appendChild(blok);
  }
}

// Функция, которая ищет стихи по автору
function naiti_stihi() {
  let vvod = document.getElementById("pole_avtor").value; // то, что ввели
  let spisok = document.getElementById("spisok_stihov");
  spisok.innerHTML = ""; // очищаем список

  for (let i = 0; i < stihi.length; i++) {
    let stih = stihi[i];

    // Проверяем, есть ли введённый текст в имени автора
    if (stih.avtor.includes(vvod)) {
      let blok = document.createElement("div");
      blok.innerHTML = `
        <h3>` + stih.nazvanie + `</h3>
        <p>Автор: ` + stih.avtor + `, Жанр: ` + stih.janr + `, Эпоха: ` + stih.epoha + `</p>
        <button onclick="pereiti_k_stihu(` + stih.id + `)">Открыть</button>
      `;
      spisok.appendChild(blok);
    }
  }
}

// Функция для перехода к стиху (пока просто выводит ID)
function pereiti_k_stihu(id) {
  alert("Открытие стиха с ID: " + id);
}

// Показываем все стихи при загрузке страницы
pokazat_vse_stihi();