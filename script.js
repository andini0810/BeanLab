// Daftar menu
const menuData = [
    { name: "Espresso", price: 18000 },
    { name: "Cappuccino", price: 22000 },
    { name: "Latte", price: 23000 },
    { name: "Manual Brew", price: 25000 },
    { name: "Signature Coffee", price: 27000 }
];

const menuContainer = document.getElementById("menuItems");
const cart = [];
let total = 0;

menuData.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
        <h4>${item.name}</h4>
        <p>Rp${item.price.toLocaleString()}</p>
        <button onclick="addToCart(${index})">Tambah ke Keranjang</button>
    `;
    menuContainer.appendChild(div);
});

function addToCart(index) {
    cart.push(menuData[index]);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart");
    const totalElement = document.getElementById("total");
    cartList.innerHTML = "";
    total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rp${item.price.toLocaleString()}`;
        cartList.appendChild(li);
        total += item.price;
    });
    totalElement.textContent = `Rp${total.toLocaleString()}`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }
    alert(`Terima kasih! Total pesanan: Rp${total.toLocaleString()}. Silakan bayar di tempat.`);
    cart.length = 0;
    updateCart();
}

// Reservasi
document.getElementById("reservationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const date = document.getElementById("date").value;
    const table = document.getElementById("table").value;
    const session = document.getElementById("session").value;

    if (date && table && session) {
        alert(`Reservasi berhasil untuk tanggal ${date}, meja ${table}, sesi: ${session}`);
        this.reset();
    }
});

// Dropdown Services
  let isToggled = false;
  const dropdown = document.getElementById("servicesDropdown");

  function toggleDropdown() {
    isToggled = !isToggled;
    dropdown.classList.toggle("opacity-100", isToggled);
    dropdown.classList.toggle("visible", isToggled);
    dropdown.classList.toggle("pointer-events-auto", isToggled);
    dropdown.classList.toggle("opacity-0", !isToggled);
    dropdown.classList.toggle("invisible", !isToggled);
    dropdown.classList.toggle("pointer-events-none", !isToggled);
  }

  function closeIfNotToggled() {
    if (!isToggled) {
      dropdown.classList.add("opacity-0", "invisible", "pointer-events-none");
      dropdown.classList.remove("opacity-100", "visible", "pointer-events-auto");
    }
  }

  window.addEventListener("click", (e) => {
    if (!e.target.closest(".group")) {
      isToggled = false;
      closeIfNotToggled();
    }
  });

