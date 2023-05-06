export function Footer() {
  const idFooter = document.getElementById("footer");
  idFooter.innerHTML += `
      <div class="container">
        <div class="row footer-wrapper flex-lg-row flex-column">
          <div class="col">
            <img
              src="https://i.ibb.co/FzRc6JC/logo-primary.png"
              alt="logo-primary" id="img-footer"
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

      <style>
      /* footer */
.footer {
  padding-top: 100px;
  background-color: #d1eeff36;
}
.footer .footer-wrapper {
  display: flex;
  width: 100%;
  gap: 20px;
}

.footer ul {
  padding: 0;
}
.footer .footer-wrapper .col img {
  margin-bottom: 20px;
}
.footer .footer-wrapper .col p {
  margin-bottom: 20px;
}
.footer .footer-wrapper .col .email,
.footer .footer-wrapper .col .phone {
  display: flex;
  align-items: center;
  gap: 5px;
}
.footer .footer-wrapper .col .email i,
.footer .footer-wrapper .col .phone i {
  padding-top: 4px;
}

.footer-wrapper .col .phone {
  margin-top: 8px;
}
.footer-wrapper .col .email a,
.footer-wrapper .col .phone a {
  text-decoration: none;
  color: black;
}
.footer .footer-wrapper .col h3 {
  color: var(--primary-color);
  margin-bottom: 20px;
}

.footer .footer-wrapper .col ul li {
  list-style-type: none;
}
.footer .footer-wrapper .col ul li a {
  text-decoration: none;
  color: black;
}
.footer .footer-wrapper .col .form-langganan input {
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid var(--primary-color);
  outline: none;
}
.footer .footer-wrapper .col .form-langganan input::placeholder {
  color: #a0a1a2;
}
.footer #button-langganan {
  background-color: var(--primary-color);
  color: white;
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
  height: 100%;
  text-align: center;
  cursor: pointer;
}
/* footer hover */
.footer .footer-wrapper .col a:hover {
  text-decoration: none;
  color: var(--primary-color);
}
.footer .footer-wrapper .col .email:hover i {
  color: var(--primary-color);
}
.footer .footer-wrapper .col .phone:hover i {
  color: var(--primary-color);
}
.footer #button-langganan:hover {
  background-color: var(--secondary-color);
}
/* footer hover */

/* ex-footer */
.ex-footer {
  padding: 5px 0;
  border-top: 1px solid var(--primary-color);
  margin-top: 100px;
}
.ex-footer-wrapper .icon i {
  color: var(--primary-color);
  font-size: 22px;
}
.ex-footer-wrapper .copyright p {
  font-size: 14px;
  font-weight: 400;
  color: var(--primary-color);
  text-align: end;
  margin: 0;
}
.ex-footer-wrapper .sosmed {
  display: block;
}

/* ex-footer */
/* footer */

@media (max-width: 991.98px) {
  /* footer */
    #img-footer{
    width: 30%!important;
  }
  .footer {
    padding-top: 50px;
  }
  .ex-footer-wrapper .copyright p {
    font-size: 12px;
    font-weight: 400;
    color: var(--primary-color);
    text-align: center;
  }
  .ex-footer-wrapper .sosmed {
    display: none;
  }
  .ex-footer {
    padding: 5px 0;
    border-top: 1px solid var(--primary-color);
    margin-top: 50px;
  }
  .ex-footer-wrapper .copyright p {
    display: block;
  }
  /* footer */
}
@media (max-width: 576px) {
      #img-footer{
    width: 40%!important;
  }
}

      </style>
          `;
}
