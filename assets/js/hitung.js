export function Hitung() {
  var usiaInput = document.getElementById("usia");
  var jenisKelaminInput = document.getElementById("jenis-kelamin");
  var tinggiBadanInput = document.getElementById("tinggi-badan");
  var beratBadanInput = document.getElementById("berat-badan");

  var btnHitung = document.getElementById("btn-hitung");

  btnHitung.addEventListener("click", function () {
    if (
      usiaInput.value.trim() == "" ||
      jenisKelaminInput.value.trim() == "" ||
      tinggiBadanInput.value.trim() == "" ||
      beratBadanInput.value.trim() == ""
    ) {
      var warningText = document.getElementById("warning");
      warningText.append= "<p>Semua form harus di isi!</p>";
      return;
    }
    var usia = usiaInput.value;
    var jenisKelamin = jenisKelaminInput.value;
    var tinggiBadan = tinggiBadanInput.value;
    var beratBadan = beratBadanInput.value;

    var kalori;
    if (jenisKelamin == "laki-laki") {
      kalori = 88.36 + 13.4 * beratBadan + 4.8 * tinggiBadan - 5.7 * usia;
    } else if (jenisKelamin == "perempuan") {
      kalori = 447.6 + 9.2 * beratBadan + 3.1 * tinggiBadan - 4.3 * usia;
    }
    var jenisKalori;
    if (kalori < 1500) {
      jenisKalori = "rendah";
    } else if (kalori >= 1500 && kalori < 2500) {
      jenisKalori = "normal";
    } else {
      jenisKalori = "tinggi";
    }

    var hasil = document.getElementById("hasil");
    hasil.innerHTML = "Kebutuhan kalori Anda: " + Math.round(kalori) + " kkal";

    var link = document.createElement("a");
    link.innerHTML = "Lihat rekomendasi makanan";
    if (jenisKalori == "rendah") {
      link.href = "rekomendasidietrendah.html";
    } else if (jenisKalori == "normal") {
      link.href = "rekomendasidietnormal.html";
    } else {
      link.href = "rekomendasidiettinggi.html";
    }
    var rekomendasiDiet = document.getElementById("rekomendasi-diet");
    rekomendasiDiet.innerHTML = "";
    rekomendasiDiet.appendChild(link);
  });
  var usiaInput = document.getElementById("usia");
  var jenisKelaminInput = document.getElementById("jenis-kelamin");
  var tinggiBadanInput = document.getElementById("tinggi-badan");
  var beratBadanInput = document.getElementById("berat-badan");

  var tombol = document.getElementById("tombol");

  tombol.addEventListener("click", function () {
    if (
      usiaInput.value.trim() == "" ||
      jenisKelaminInput.value.trim() == "" ||
      tinggiBadanInput.value.trim() == "" ||
      beratBadanInput.value.trim() == ""
    ) {
      var warningText = document.getElementById("warning");
      warningText.innerHTML = "<p>Semua form harus di isi!</p>";
      return;
    }
    var usia = usiaInput.value;
    var jenisKelamin = jenisKelaminInput.value;
    var tinggiBadan = tinggiBadanInput.value;
    var beratBadan = beratBadanInput.value;

    var kalori;
    if (jenisKelamin == "laki-laki") {
      kalori = 88.36 + 13.4 * beratBadan + 4.8 * tinggiBadan - 5.7 * usia;
    } else if (jenisKelamin == "perempuan") {
      kalori = 447.6 + 9.2 * beratBadan + 3.1 * tinggiBadan - 4.3 * usia;
    }
    var jenisKalori;
    if (kalori < 1500) {
      jenisKalori = "rendah";
    } else if (kalori >= 1500 && kalori < 2500) {
      jenisKalori = "normal";
    } else {
      jenisKalori = "tinggi";
    }

    var hasil = document.getElementById("hasil");
    hasil.innerHTML = "Kebutuhan kalori Anda: " + Math.round(kalori) + " kkal";

    var link = document.createElement("a");
    link.innerHTML = "Lihat rekomendasi makanan";
    if (jenisKalori == "rendah") {
      link.href = "rekomendasi/rekomendasidietrendah.html";
    } else if (jenisKalori == "normal") {
      link.href = "rekomendasi/rekomendasidietnormal.html";
    } else {
      link.href = "rekomendasi/rekomendasidiettinggi.html";
    }
    var rekomendasiDiet = document.getElementById("rekomendasi-diet");
    rekomendasiDiet.innerHTML = "";
    rekomendasiDiet.appendChild(link);
  });
}
