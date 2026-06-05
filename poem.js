
async function zagruzit_stih() {
  let id = localStorage.getItem("tekushiy_stih_id");
  if (!id) {
    document.getElementById("tekst_stiha").innerHTML = "ID стихотворения не найден.";
    return;
  }

  const { data, error } = await supabaseClient
    .from('STIHI')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    document.getElementById("tekst_stiha").innerHTML = "Стихотворение не найдено.";
    return;
  }

  document.title = data.nazvanie;
  document.querySelector("h1").innerHTML = data.nazvanie;
  document.getElementById("tekst_stiha").innerHTML = data.tekst;
}


function pokazatLeksiku() {
  document.getElementById("gruppy-knopok").style.display = "none";
  document.getElementById("knopki-leksika").style.display = "block";
}

function pokazatFonetiku() {
  document.getElementById("gruppy-knopok").style.display = "none";
  document.getElementById("knopki-fonetika").style.display = "block";
}

function pokazatSintaksis() {
  document.getElementById("gruppy-knopok").style.display = "none";
  document.getElementById("knopki-sintaksis").style.display = "block";
}

function nazadKGruppam() {
  document.getElementById("knopki-leksika").style.display = "none";
  document.getElementById("knopki-fonetika").style.display = "none";
  document.getElementById("knopki-sintaksis").style.display = "none";
  document.getElementById("gruppy-knopok").style.display = "block";
}



function snyatVyydelenie() {
  zagruzit_stih();
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

function vyydelit_olitsetvorenie() {
  let tekst = document.getElementById("tekst_stiha").innerHTML;
  let novyi_tekst = tekst.replace(/<olitsetvorenie>(.*?)<\/olitsetvorenie>/g, '<span class="vydelit_olitsetvorenie">$1</span>');
  document.getElementById("tekst_stiha").innerHTML = novyi_tekst;
}

function vyydelit_sravnenie() {
  let tekst = document.getElementById("tekst_stiha").innerHTML;
  let novyi_tekst = tekst.replace(/<sravnenie>(.*?)<\/sravnenie>/g, '<span class="vydelit_sravnenie">$1</span>');
  document.getElementById("tekst_stiha").innerHTML = novyi_tekst;
}


function vyydelit_metonimiya() {
  let tekst = document.getElementById("tekst_stiha").innerHTML;
  let novyi_tekst = tekst.replace(/<metonimiya>(.*?)<\/metonimiya>/g, '<span class="vydelit_metonimiya">$1</span>');
  document.getElementById("tekst_stiha").innerHTML = novyi_tekst;
}

function vyydelit_giperbola() {
  let tekst = document.getElementById("tekst_stiha").innerHTML;
  let novyi_tekst = tekst.replace(/<giperbola>(.*?)<\/giperbola>/g, '<span class="vydelit_giperbola">$1</span>');
  document.getElementById("tekst_stiha").innerHTML = novyi_tekst;
}

function vyydelit_litota() {
  let tekst = document.getElementById("tekst_stiha").innerHTML;
  let novyi_tekst = tekst.replace(/<litota>(.*?)<\/litota>/g, '<span class="vydelit_litota">$1</span>');
  document.getElementById("tekst_stiha").innerHTML = novyi_tekst;
}


function vyydelit_alliteration() {
  let tekst = document.getElementById("tekst_stiha").innerHTML;
  let novyi_tekst = tekst.replace(/<alliteration>(.*?)<\/alliteration>/g, '<span class="vydelit_alliteration">$1</span>');
  document.getElementById("tekst_stiha").innerHTML = novyi_tekst;
}

function vyydelit_assonance() {
  let tekst = document.getElementById("tekst_stiha").innerHTML;
  let novyi_tekst = tekst.replace(/<assonance>(.*?)<\/assonance>/g, '<span class="vydelit_assonance">$1</span>');
  document.getElementById("tekst_stiha").innerHTML = novyi_tekst;
}

function vyydelit_anaphora() {
  let tekst = document.getElementById("tekst_stiha").innerHTML;
  let novyi_tekst = tekst.replace(/<anaphora>(.*?)<\/anaphora>/g, '<span class="vydelit_anaphora">$1</span>');
  document.getElementById("tekst_stiha").innerHTML = novyi_tekst;
}


function vyydelit_epifora() {
  let tekst = document.getElementById("tekst_stiha").innerHTML;
  let novyi_tekst = tekst.replace(/<epifora>(.*?)<\/epifora>/g, '<span class="vydelit_epifora">$1</span>');
  document.getElementById("tekst_stiha").innerHTML = novyi_tekst;
}


function vyydelit_parcellation() {
  let tekst = document.getElementById("tekst_stiha").innerHTML;
  let novyi_tekst = tekst.replace(/<parcellation>(.*?)<\/parcellation>/g, '<span class="vydelit_parcellation">$1</span>');
  document.getElementById("tekst_stiha").innerHTML = novyi_tekst;
}


window.addEventListener('DOMContentLoaded', () => {
  zagruzit_stih();
});