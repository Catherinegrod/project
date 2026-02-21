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


function pokazat_vse_stihi() {
  let spisok = document.getElementById("spisok_stihov");
  spisok.innerHTML = ""; 

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


function naiti_stihi() {
  let vvod = document.getElementById("pole_avtor").value; 
  let spisok = document.getElementById("spisok_stihov");
  spisok.innerHTML = ""; 

  for (let i = 0; i < stihi.length; i++) {
    let stih = stihi[i];

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


function pereiti_k_stihu(id) {
  alert("Открытие стиха с ID: " + id);
}



pokazat_vse_stihi();
