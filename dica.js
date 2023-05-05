export async function getDietMakanan() {
  try {
    const response = await fetch(
      "https://6451c9d6a2860c9ed4fae68b.mockapi.io/api/Normal"
    );

    return parseFullIdRes(await response.json());
  } catch (error) {
    error;
  }
}

function parseFullIdRes(res) {
  const idNormal = document.getElementById("diet-normal");
  res.forEach((normal) => {
    idNormal.innerHTML += `
              <!-- sarapan -->
          <div class="col-4">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="${normal.gambar}"
                    class="card-img"
                    alt="${normal.judul}"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${normal.judul}</h5>
                    <p class="card-text">
                      ${normal.deskripsi}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- sarapan -->
      `;
  });
}
