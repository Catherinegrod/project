async function proverit_polzovatelya() {
  const { data: { user }, error } = await supabaseClient.auth.getUser();
  if (user) {
    document.getElementById("knopka_vhoda").style.display = "none";
    document.getElementById("panel_polzovatelya").style.display = "block";
    if (document.getElementById("imya_polzovatelya_panel")) {
      document.getElementById("imya_polzovatelya_panel").textContent = 
        user.user_metadata.full_name || user.email;
    }
  } else {
    document.getElementById("knopka_vhoda").style.display = "block";
    document.getElementById("panel_polzovatelya").style.display = "none";
  }
}

async function zaregistririvatsya() {
  let email = document.getElementById("email_reg").value;
  let parol = document.getElementById("parol_reg").value;
  let imya = document.getElementById("imya_polzovatelya").value;
  
  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: parol,
    options: {
      data: {
        full_name: imya
      }
    }
  });
  
  if (error) {
    alert("Ошибка: " + error.message);
  } else {
    alert("Регистрация успешна! Проверьте почту для подтверждения.");
    pokazat_vhod();
  }
}

async function voiti() {
  let email = document.getElementById("email").value;
  let parol = document.getElementById("parol").value;
  
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: parol
  });
  
  if (error) {
    alert("Ошибка: " + error.message);
  } else {
    alert("Успешный вход!");
    proverit_polzovatelya();
  }
}

async function vyiti() {
  await supabaseClient.auth.signOut();
  alert("Вы вышли из аккаунта");
  proverit_polzovatelya();
}

function pokazat_vhod() {
  document.getElementById("forma_vhoda").style.display = "block";
  document.getElementById("forma_registracii").style.display = "none";
}

function pokazat_registraciyu() {
  document.getElementById("forma_vhoda").style.display = "none";
  document.getElementById("forma_registracii").style.display = "block";
}

function pokazat_formu_dobavleniya() {
  document.getElementById("forma_dobavleniya_stiha").style.display = "block";
}

function skryt_formu_dobavleniya() {
  document.getElementById("forma_dobavleniya_stiha").style.display = "none";
}

async function dobavit_stih() {
  const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
  
  if (!user) {
    alert("Сначала войдите в аккаунт!");
    return;
  }
  
  let stih = {
  nazvanie: document.getElementById("nazvanie_stiha").value,
  avtor: document.getElementById("avtor_stiha").value,
  janr: document.getElementById("janr_stiha").value,
  epoha: document.getElementById("epoha_stiha").value,
  tekst: document.getElementById("tekst_stiha").value,
  avtor_stiha: user.user_metadata.full_name || user.email,
  data_dobavleniya: new Date().toISOString()
};
  
  const { data, error } = await supabaseClient
    .from('STIHI')
    .insert([stih]);
  
  if (error) {
    alert("Ошибка: " + error.message);
  } else {
    alert("Стихотворение добавлено!");
    skryt_formu_dobavleniya();
  
    document.getElementById("nazvanie_stiha").value = "";
    document.getElementById("avtor_stiha").value = "";
    document.getElementById("janr_stiha").value = "";
    document.getElementById("epoha_stiha").value = "";
    document.getElementById("tekst_stiha").value = "";
   
    pokazat_vse_stihi();
  }
}

async function pokazat_vse_stihi() {
  let spisok = document.getElementById("spisok_stihov");
  if (!spisok) return;
  
  spisok.innerHTML = "<p>Загрузка...</p>";
  
  const { data, error } = await supabaseClient
    .from('STIHI')
    .select('*')
    .order('data_dobavleniya', { ascending: false });
  
  if (error) {
    console.error("Ошибка загрузки: ", error);
    spisok.innerHTML = "<p>Ошибка загрузки стихов</p>";
    return;
  }
  
  spisok.innerHTML = "";
  
  data.forEach((stih) => {
    let blok = document.createElement("div");
    blok.innerHTML = `
      <h3>${stih.nazvanie}</h3>
      <p>Автор: ${stih.avtor}, Жанр: ${stih.janr}, Эпоха: ${stih.epoha}</p>
      <p><small>Добавил: ${stih.avtor_stiha}</small></p>
      <button onclick="pereiti_k_stihu('${stih.id}')">Открыть</button>
    `;
    spisok.appendChild(blok);
  });
}

async function naiti_stihi() {
  let vvod = document.getElementById("pole_avtor").value;
  let spisok = document.getElementById("spisok_stihov");
  
  if (!spisok) return;
  
  spisok.innerHTML = "<p>Поиск...</p>";
  
  const { data, error } = await supabaseClient
    .from('STIHI')
    .select('*');
  
  if (error) {
    console.error("Ошибка поиска: ", error);
    spisok.innerHTML = "<p>Ошибка поиска</p>";
    return;
  }
  
  spisok.innerHTML = "";
  
  let naidennye = data.filter(stih => 
    stih.avtor.toLowerCase().includes(vvod.toLowerCase())
  );
  
  if (naidennye.length === 0) {
    spisok.innerHTML = "<p>Стихи не найдены</p>";
   ;
  }
  
  naidennye.forEach((stih) => {
    let blok = document.createElement("div");
    blok.innerHTML = `
      <h3>${stih.nazvanie}</h3>
      <p>Автор: ${stih.avtor}, Жанр: ${stih.janr}, Эпоха: ${stih.epoha}</p>
      <p><small>Добавил: ${stih.avtor_stiha}</small></p>
      <button onclick="pereiti_k_stihu('${stih.id}')">Открыть</button>
    `;
    spisok.appendChild(blok);
  });
}

function pereiti_k_stihu(id) {
  localStorage.setItem("tekushiy_stih_id", id);
  window.location.href = "poem.html";
}

window.addEventListener('DOMContentLoaded', () => {
  proverit_polzovatelya();
  pokazat_vse_stihi();
});