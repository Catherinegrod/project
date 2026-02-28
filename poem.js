

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
  },
  {
    id:5,
    nazvanie:"Весенняя гроза",
    avtor:"Ф.И. Тютчев",
    janr:"Лирика",
    epoha:"Романтизм",
    tekst:`Люблю грозу в начале мая,
    <br>Когда <epithet>весенний,первый</epithet> <dopepithet>гром</dopepithet>,
    <br> Как бы <olistetvorenie>резвяся<olistetvorenie> и <olistetvorenie>играя</olistetvorenie>,
    <br> Грохочет в <dopepithet>небе</dopepithet> <epithet>голубом</epithet>.
    <br>
    <br> Гремят <dopepithet>раскаты</dopepithet> <epithet>молодые</epithet>,
    <br>Вот <metaphor>дождик брызнул</metaphor>, пыль летит,
    <br>Повисли <dopepithet>перлы</dopepithet> <epithet>дождевые</epithet>,
    <br>И <metaphor>солнце нити золотит</metaphor>.
    <br>
    <br>С горы <olistetvorenie>бежит поток </olistetvorenie>проворный,
    <br>В лесу не молкнет <epithet>птичий</epithet> <dopepithet>гам</dopepithet>,
    <br>И гам лесной, и шум нагорный --
    <br>Все вторит весело громам.
    <br>
    <br>Ты скажешь: ветреная Геба,
    <br>Кормя зевесова орла,
    <br><epithet>Громокипящий</epithet> <dopepithet>клубок</dopepithet> неба,
    <br>Смеясь, на землю пролила.`
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
   novyi_tekst = novyi_tekst.replace(/<dopepithet>(.*?)<\/dopepithet>/g, '<span class="doopolnenie_epitet">$1</span>');
  document.getElementById("tekst_stiha").innerHTML = novyi_tekst;
}



function vyydelit_olistetvorenie() {
  let tekst = document.getElementById("tekst_stiha").innerHTML;
  let novyi_tekst = tekst.replace(/<olistetvorenie>(.*?)<\/olistetvorenie>/g, '<span class="vydelit_olistetvorenie">$1</span>');
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
