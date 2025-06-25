// hamburger menu
const nav = document.querySelector('.nav')
const hamburger = document.querySelector('#hamburger-menu')

hamburger.onclick = (e) => {
    e.preventDefault()
    nav.classList.toggle('active')
}

// hamburger menu hilang
document.addEventListener("click", (e) =>{
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active')
    }
})

// backend
const params = new URLSearchParams(window.location.search);
const produk = params.get("produk");
if (produk) {
  document.getElementById("produk");
}

// submit backend

document.getElementById("order-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this).entries());
  const res = await fetch("/api/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  alert(result.message);
});
