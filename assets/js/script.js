import { Footer } from "./footer.js";
import { Navbar } from "./navbar.js";
import {
  getDietNormal,
  getDietRendah,
  getDietTinggi,
} from "./rekomendasi-diet.js";
import { getOlahragaNormal, getOlahragaRendah, getOlahragaTinggi } from "./rekomendasi-olahraga.js";
getDietRendah();
getDietNormal();
getDietTinggi();
Navbar();
Footer();
getOlahragaNormal();
getOlahragaRendah()
getOlahragaTinggi()
