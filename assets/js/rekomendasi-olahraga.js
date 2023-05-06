export async function getOlahragaRendah() {
  try {
    const response = await fetch(
      "https://645545f9f803f345763f1fe6.mockapi.io/api/olahraga-rendah"
    );

    return parseOlahragaRendah(await response.json());
  } catch (error) {
    error;
  }
}
function parseOlahragaRendah(res) {
  const idOlahragaRendah = document.getElementById("olahraga-rendah");
  res.forEach((data) => {
    idOlahragaRendah.innerHTML += `
              <div class="col">
            <div class="card card-olahraga">
              <img
                src="${data.gambar}"
                class="card-img-top"
                alt="${data.judul}"
              />
              <div class="card-body">
                <h5 class="card-title">${data.judul}</h5>
                <p class="card-text">
                  ${data.deskripsi}
                </p>
              </div>
            </div>
          </div>
      `;
  });
}

// kalori-normal
export async function getOlahragaNormal() {
  try {
    const response = await fetch(
      "https://6455495df803f345763f7ac8.mockapi.io/api/olahraga-normal"
    );

    return parseOlahragaNormal(await response.json());
  } catch (error) {
    error;
  }
}
function parseOlahragaNormal(res) {
  const idOlahragaNormal = document.getElementById("olahraga-normal");
  res.forEach((data) => {
    idOlahragaNormal.innerHTML += `
              <div class="col">
            <div class="card card-olahraga">
              <img
                src="${data.gambar}"
                class="card-img-top"
                alt="${data.judul}"
              />
              <div class="card-body">
                <h5 class="card-title">${data.judul}</h5>
                <p class="card-text">
                  ${data.deskripsi}
                </p>
              </div>
            </div>
          </div>
      `;
  });
}
// kalori-tinggi
export async function getOlahragaTinggi() {
  try {
    const response = await fetch(
      "https://6455495df803f345763f7ac8.mockapi.io/api/olahraga-tinggi"
    );

    return parseOlahragaTinggi(await response.json());
  } catch (error) {
    error;
  }
}
function parseOlahragaTinggi(res) {
  const idOlahragaTinggi = document.getElementById("olahraga-tinggi");
  res.forEach((data) => {
    idOlahragaTinggi.innerHTML += `
              <div class="col">
            <div class="card card-olahraga">
              <img
                src="${data.gambar}"
                class="card-img-top"
                alt="${data.judul}"
              />
              <div class="card-body">
                <h5 class="card-title">${data.judul}</h5>
                <p class="card-text">
                  ${data.deskripsi}
                </p>
              </div>
            </div>
          </div>
      `;
  });
}
