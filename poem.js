

let stihi = [
  {
    id: 1,
    nazvanie: "У лукоморья дуб зелёный",
    avtor: "А.С. Пушкин",
    janr: "Баллада",
    epoha: "Романтизм",
    tekst: `У лукоморья дуб зелёный;<br><epithet>Златая</epithet> цепь на дубе том:<br>И днём и ночью кот учёный...`
  },
  {
    id: 2,
    nazvanie: "Зимнее утро",
    avtor: "А.С. Пушкин",
    janr: "Лирика",
    epoha: "Романтизм",
    tekst: `Мороз и солнце; день чудесный!<br>Еще ты дремлешь, друг <epithet>прелестный</epithet>...`
  },
  {
    id: 3,
    nazvanie: "Бородино",
    avtor: "М.Ю. Лермонтов",
    janr: "Эпопея",
    epoha: "Романтизм",
    tekst: `Сквозь дым летучий французы<br>Русские бойцы...`
  },
  {
    id: 4,
    nazvanie: "Послушайте",
    avtor:"В.В. Маяковский",
    janr: "Лирика",
    epoha:"Романтизм",
    tekst:`Послушайте!
<br>Ведь, если звезды <metaphor>зажигают </metaphor> —
<br>значит — это кому-нибудь нужно?
<br>Значит — кто-то хочет, чтобы они были?
<br>Значит — кто-то называет эти плево́чки жемчужиной?`
  }
];


let id = localStorage.getItem("tekushiy_stih_id");


let naidennyi_stih = null;
for (let i = 0; i < stihi.length; i++) {
  if (stihi[i].id == id) {
    naidennyi_stih = stihi[i];
    break;
  }
}


if (naidennyi_stih) {
  document.title = naidennyi_stih.nazvanie;
  document.querySelector("h1").innerHTML = naidennyi_stih.nazvanie;
  document.getElementById("tekst_stiha").innerHTML = naidennyi_stih.tekst;
} else {
  document.getElementById("tekst_stiha").innerHTML = "Стихотворение не найдено.";
}


function vyydelit_epitet() {
  let tekst = document.getElementById("tekst_stiha").innerHTML;
  let novyi_tekst = tekst.replace(/<epithet>(.*?)<\/epithet>/g, '<span class="vydelit_epitet">$1</span>');
  document.getElementById("tekst_stiha").innerHTML = novyi_tekst;
}

function vyydelit_metaphoru() {
  let tekst = document.getElementById("tekst_stiha").innerHTML;
  let novyi_tekst = tekst.replace(/<metaphor>(.*?)<\/metaphor>/g, '<span class="vydelit_metaphoru">$1</span>');
  document.getElementById("tekst_stiha").innerHTML = novyi_tekst;
}

function snyat_vyydelenie() {
  if (naidennyi_stih) {
    document.getElementById("tekst_stiha").innerHTML = naidennyi_stih.tekst;
  }
}