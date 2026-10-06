const productos = [
  {
    id: 1,
    nombre: "CASA DE “UP”",
    descripcion: "Un set coleccionable de la icónica casa de la película UP de Disney, con sus globos y detalles únicos",
    precio: 3999,
    imagen: "https://tiendalego.com.co/cdn/shop/products/43217-1_2aea49ef-bfdb-45f2-a972-29e63b345c2e_851x851.jpg?v=1682517086"
  },
  {
    id: 2,
    nombre: "SHREK, BURRO Y GATO CON BOTAS",
    descripcion: "Recrea las aventuras del pantano con estas detalladas figuras para construir de Shrek, Burro y Gato con Botas",
    precio: 945000,
    imagen: "https://tiendalego.com.co/cdn/shop/files/72423-3_851x851.jpg?v=1782325932"
  },
  {
    id: 3,
    nombre: "KIT FORTNITE",
    descripcion: "Construye un vehículo o estructura icónica del universo de Fortnite con este kit de construcción detallado",
    precio: 699900,
    imagen: "https://tiendalego.com.co/cdn/shop/files/77081-3_851x851.jpg?v=1782325985"
  },
  {
    id: 4,
    nombre: "PEANUTS: LA CASETA DE SNOOPY",
    descripcion: "Un set nostálgico para construir la famosa caseta roja de Snoopy, con la figura de Snoopy incluida.",
    precio: 559000,
    imagen: "https://tiendalego.com.co/cdn/shop/files/21368-3_851x851.jpg?v=1782326041"
  },
  {
    id: 5,
    nombre: "MEGACAR KOENIGSEGG SADAIR'S SPEAR",
    descripcion: "Un modelo de ingeniería de alto rendimiento para construir el exclusivo megacar Koenigsegg Sadair's Spear.",
    precio: 2899900,
    imagen: "https://tiendalego.com.co/cdn/shop/files/42232-4_851x851.jpg?v=1785849852"
  }
];


/* ==============================
   CARRITO
================================ */

const carrito = [];

const contenedorProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");


/* ==============================
   MOSTRAR PRODUCTOS
================================ */

function mostrarProductos() {

  contenedorProductos.innerHTML = "";

  productos.forEach(prod => {

    const div = document.createElement("div");

    div.className = "producto";

    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">

      <h3>${prod.nombre}</h3>

      <p class="descripcion">
        ${prod.descripcion}
      </p>

      <p class="precio">
        ${prod.precio.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0
        })}
      </p>

      <button onclick="agregarAlCarrito(${prod.id})">
        Agregar al carrito
      </button>
    `;

    contenedorProductos.appendChild(div);

  });

}


/* ==============================
   AGREGAR AL CARRITO
================================ */

function agregarAlCarrito(id) {

  const productoExistente =
    carrito.find(p => p.id === id);

  if (productoExistente) {

    productoExistente.cantidad++;

  } else {

    const producto =
      productos.find(p => p.id === id);

    carrito.push({
      ...producto,
      cantidad: 1
    });

  }

  actualizarCarrito();

}


/* ==============================
   ACTUALIZAR CARRITO
================================ */

function actualizarCarrito() {

  listaCarrito.innerHTML = "";

  let total = 0;
  let totalItems = 0;

  carrito.forEach(item => {

    const li =
      document.createElement("li");

    const subtotal =
      item.precio * item.cantidad;

    li.textContent =
      `${item.nombre} x${item.cantidad} — ` +
      subtotal.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
      });

    listaCarrito.appendChild(li);

    total += subtotal;
    totalItems += item.cantidad;

  });

  totalCarrito.textContent =
    total.toLocaleString("es-CO");

  actualizarTituloCarrito(totalItems);

}


/* ==============================
   CONTADOR DEL CARRITO
================================ */

function actualizarTituloCarrito(cantidad) {

  const titulo =
    document.querySelector(".carrito h2");

  titulo.textContent =
    `🧾 Carrito de Compras (${cantidad})`;

}


/* ==============================
   VACIAR CARRITO
================================ */

function vaciarCarrito() {

  if (carrito.length === 0) {

    alert("🛒 El carrito ya está vacío.");

    return;

  }

  if (
    confirm(
      "¿Estás seguro de que quieres vaciar el carrito?"
    )
  ) {

    carrito.length = 0;

    actualizarCarrito();

  }

}


/* ==============================
   FINALIZAR COMPRA
================================ */

function finalizarCompra() {

  if (carrito.length === 0) {

    alert(
      "🛒 Tu carrito está vacío. Agrega productos antes de finalizar la compra."
    );

    return;

  }

  alert(
    "🎉 ¡Pedido simulado confirmado!\n\n" +
    "En un eCommerce real, ahora entrarían en acción " +
    "el backend, la pasarela de pago y la logística."
  );

  carrito.length = 0;

  actualizarCarrito();

}


/* ==============================
   INICIAR TIENDA
================================ */

mostrarProductos();
