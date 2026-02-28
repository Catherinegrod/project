


let stihi = [
  {
    id: 1,
    nazvanie: "У лукоморья дуб зелёный",
    avtor: "А.С. Пушкин",
    janr: "Баллада",
    epoha: "Романтизм",
    opisanie:"что-то очень крутое",
    tekst: `У лукоморья дуб зелёный;<br><epithet>Златая</epithet> цепь на дубе том:<br>И днём и ночью кот учёный...`
  },
  {
    id: 2,
    nazvanie: "Зимнее утро",
    avtor: "А.С. Пушкин",
    janr: "Лирика",
    epoha: "Романтизм",
    opisanie:"что-то очень крутое",
    tekst: `Мороз и солнце; день чудесный!<br>Еще ты дремлешь, друг <epithet>прелестный</epithet>...`
  },
  {
    id: 3,
    nazvanie: "Бородино",
    avtor: "М.Ю. Лермонтов",
    janr: "Эпопея",
    epoha: "Романтизм",
    opisanie:"что-то очень крутое",
    tekst: `Сквозь дым летучий французы<br>Русские бойцы...`
  },
  {
    id: 4,
    nazvanie: "Послушайте",
    avtor:"В.В. Маяковский",
    janr: "Лирика",
    epoha:"Романтизм",
    opisanie:"что-то очень крутое",
    tekst:`Послушайте!
<br>Ведь, если <metaphor>звезды зажигают </metaphor> —
<br>значит — это кому-нибудь нужно?
<br>Значит — кто-то хочет, чтобы они были?
<br>Значит — кто-то называет эти <epithet>плево́чки</epithet> <dopepithet>жемчужиной</dopepithet>?
<br>
<br>И, надрываясь
<br>в <metaphor>метелях полу́денной пыли</metaphor>,
<br>врывается к богу,
<br>боится, что опоздал,
<br>плачет,
<br>целует ему <epithet>жилистую</epithet> <dopepithet>руку</dopepithet>,
<br>просит —
<br>чтоб обязательно была звезда! —
<br>клянется —
<br>не перенесет эту беззвездную муку!
<br>А после
<br>ходит <epithet>тревожный</epithet>,
<br>но <epithet>спокойный</epithet> наружно.
<br>Говорит кому-то:
<br>«Ведь теперь тебе ничего?
<br>Не страшно?
<br>Да?!»
<br>Послушайте!
<br>Ведь, если <metaphor>звезды</metaphor>
<br><metaphor>зажигают</metaphor> —
<br>значит — это кому-нибудь нужно?
<br>Значит — это необходимо,
<br>чтобы каждый вечер
<br>над крышами
<br>загоралась хоть одна звезда?!`
  },
  {
    id:5,
    nazvanie:"Весенняя гроза",
    avtor:"Ф.И. Тютчев",
    janr:"Лирика",
    epoha:"Романтизм",
    opisanie:"реально крутое описание",
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

function vydelit_vse() {
  let tekst = document.getElementById("tekst_stiha").innerHTML;
    tekst = tekst.replace(/<epithet>(.*?)<\/epithet>/g, '<span class="vydelit_epitet">$1</span>');
  tekst =tekst.replace(/<dopepithet>(.*?)<\/dopepithet>/g, '<span class="doopolnenie_epitet">$1</span>');
  tekst = tekst.replace(/<olistetvorenie>(.*?)<\/olistetvorenie>/g, '<span class="vydelit_olistetvorenie">$1</span>');
  tekst = tekst.replace(/<metaphor>(.*?)<\/metaphor>/g, '<span class="vydelit_metaphoru">$1</span>');
  document.getElementById("tekst_stiha").innerHTML = tekst;
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
