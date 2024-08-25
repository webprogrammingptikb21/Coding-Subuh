import { API } from "./API";
// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
// dom elements
const cartCountElement = document.querySelector("#cart-count");
const cartLink = document.querySelector("#cart-link");
const loginRegisterButton = document.querySelector("#loginRegisterButtons");

async function showCartCount() {
  try {
    const response = await API.getCartCount();

    if (!response.ok) {
      throw new Error("Upps, gagal mendapatkan jumlah keranjang");
    }
    cartCountElement.textContent = await response.json();
    cartLink.href = "cart.html";
  } catch {
    cartLink.href = "login.html";
  }
}

async function showCurrentUser() {
  try {
    const response = await API.getCurrentUser();

    if (response.ok) {
      const user = await response.json();
      loginRegisterButton.innerHTML = `
        <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <button class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown">
                    ${user.name}
                    </button>    
                    <ul class="dropdown-menu dropdown-menu-light">
                        <li">
                            <a class="dropdown-item" href="logout.html">Logout</a>
                        </li>
                    </ul>
                </li>
        </ul>
            `;
    }
  } catch {}
}

document.addEventListener("domContentLoaded", () => {
  showCurrentUser();
  showCartCount();
});
