// Tenemos un li de productos
document.addEventListener("DOMContentLoaded", () => {
//Nos aseguramos que el DOM esté corectamente cargado antes de ejecutar cualquier cosa
  const productos = [
    { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
    { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
    { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
    { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
    { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
  ];

  const li = document.getElementById("lista-de-productos"); //Se modificó el tipo de elemento a obtener
  const $i = document.querySelector('input');

  function displayProductos(productos) {
    while (li.firstChild) {
      li.removeChild(li.firstChild);
    }
    productos.forEach(producto => {
      const d = document.createElement("div");
      d.classList.add("producto");

      const ti = document.createElement("p");
      ti.classList.add("titulo");
      ti.textContent = producto.nombre;

      const imagen = document.createElement("img");
      imagen.setAttribute('src', producto.img);

      d.appendChild(ti);
      d.appendChild(imagen);
      li.appendChild(d);
    });
  } //Se declaró la función y se ajustó a las necesidades, se cambió el for por un forEach

  displayProductos(productos);

  const botonDeFiltro = document.querySelector("button");

  botonDeFiltro.onclick = function() {
    const texto = $i.value.trim().toLowerCase(); //se quitan los espacios y se hace en minúsculas para poder ajustarse a las necesidades del usuario
    const productosFiltrados = filtrado(productos, texto);
    displayProductos(productosFiltrados);
  };//Se separó botonDeFiltro del orden y se ajustó a las necesiades

  const filtrado = (productos = [], texto) => {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  };
});
