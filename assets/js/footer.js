export function Footer() {
  const idFooter = document.getElementById("footer");
  idFooter.innerHTML += `
      <div class="container">
        <div class="row footer-wrapper flex-lg-row flex-column">
          <div class="col">
            <img
              src="https://i.ibb.co/FzRc6JC/logo-primary.png"
              alt="logo-primary"
              width="60%"
            />
            <p>
              Setiap kita makan dan minum, kita dapat menentukan dunia seperti
              apa yang kita inginkan
            </p>
            <div class="email">
              <div class="icon">
                <i class="bx bx-envelope"></i>
              </div>
              <a href="">info@dietcare.com</a>
            </div>
            <div class="phone">
              <div class="icon">
                <i class="bx bx-phone"></i>
              </div>
              <a href="">+6289 3456 7890</a>
            </div>
          </div>
          <div class="col">
            <h3>Layanan Kami</h3>
            <ul class="d-flex flex-column gap-3">
              <li><a href="">Diet Sehat</a></li>
              <li><a href="">Edukasi</a></li>
              <li><a href="">Rekomendasi Makanan</a></li>
              <li><a href="">Rekomendasi Olahraga</a></li>
            </ul>
          </div>
          <div class="col">
            <h3>Support</h3>
            <ul class="d-flex flex-column gap-3">
              <li><a href="">Tentang DietCare</a></li>
              <li><a href="">Kebijakan & Privasi</a></li>
              <li><a href="">Hubungi Kami</a></li>
            </ul>
          </div>
          <div class="col">
            <h3>Langganan</h3>
            <p>Berlangganan untuk mendapatkan info dari kami lebih cepat</p>
            <div class="form-langganan d-flex">
              <input
                type="email"
                placeholder="Email anda ..."
                id="input-email-footer"
              />
              <input type="submit" value="Kirim" id="button-langganan" />
            </div>
          </div>
        </div>
      </div>
      <div class="ex-footer">
        <div class="container">
          <div
            class="ex-footer-wrapper row align-items-center justify-content-between"
          >
            <div class="col sosmed">
              <div class="icon d-flex gap-3 align-items-center pt-1">
                <a href=""><i class="bx bxl-facebook-square"></i></a>
                <a href=""><i class="bx bxl-instagram-alt"></i></a>
                <a href=""><i class="bx bxl-twitter"></i></a>
                <a href=""><i class="bx bxl-linkedin-square"></i></a>
              </div>
            </div>
            <div class="col copyright">
              <p>
                Copyright © FE-37 & BE-19 - Diet Care 2023 | All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
          `;
}
