export async function getDietNormal() {
  try {
    const response = await fetch(
      "https://6451c9d6a2860c9ed4fae68b.mockapi.io/api/Normal"
    );

    return parseDietNormal(await response.json());
  } catch (error) {
    error;
  }
}

function parseDietNormal(res) {
  const idNormal = document.getElementById("diet-normal");
  res.forEach((data) => {
    idNormal.innerHTML += `
          <div class="col">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="${data.gambar}"
                    class="card-img"
                    alt="${data.judul}"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${data.judul}</h5>
                    <p class="card-text">
                      ${data.deskripsi}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `;
  });
}
// diet rendah
export async function getDietRendah() {
  try {
    const response = await fetch(
      "https://6455446cf803f345763ef5b5.mockapi.io/api/Rendah"
    );

    return parseDietRendah(await response.json());
  } catch (error) {
    error;
  }
}

function parseDietRendah(res) {
  const idRendah = document.getElementById("diet-rendah");
  res.forEach((data) => {
    idRendah.innerHTML += `
          <div class="col">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="${data.gambar}"
                    class="card-img"
                    alt="${data.judul}"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${data.judul}</h5>
                    <p class="card-text">
                      ${data.deskripsi}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `;
  });
}
// kalori-tinggi
export async function getDietTinggi() {
  try {
    const response = await fetch(
      "https://6455446cf803f345763ef5b5.mockapi.io/api/Tinggi"
    );

    return parseDietTinggi(await response.json());
  } catch (error) {
    error;
  }
}
function parseDietTinggi(res) {
  const idTinggi = document.getElementById("diet-tinggi");
  res.forEach((data) => {
    idTinggi.innerHTML += `
          <div class="col">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="${data.gambar}"
                    class="card-img"
                    alt="${data.judul}"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${data.judul}</h5>
                    <p class="card-text">
                      ${data.deskripsi}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `;
  });
}
