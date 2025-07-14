// Crear estructura HTML por semestre
const contenedor = document.getElementById("malla-container");
const creditosPorSemestre = {};

for (let i = 1; i <= 10; i++) {
  const columna = document.createElement("div");
  columna.classList.add("semestre");
  columna.dataset.semestre = i;

  const titulo = document.createElement("h2");
  titulo.textContent = `Semestre ${i}`;

  const contador = document.createElement("p");
  contador.classList.add("contador-creditos");
  contador.textContent = "Créditos seleccionados: 0";
  contador.dataset.creditos = "0";

  columna.appendChild(titulo);
  columna.appendChild(contador);
  contenedor.appendChild(columna);
}
// Mostrar los ramos por semestre
ramos.forEach((ramo) => {
  const columna = document.querySelector(`.semestre[data-semestre="${ramo.semestre}"]`);

  const tarjeta = document.createElement("div");
  tarjeta.classList.add("ramo");
  tarjeta.dataset.tipo = ramo.tipo;
  tarjeta.textContent = ramo.nombre;

  const popup = document.createElement("span");
  popup.classList.add("creditos-popup");
  popup.textContent = `${ramo.creditos} créditos`;
  tarjeta.appendChild(popup);

  tarjeta.addEventListener("mouseenter", () => {
    popup.style.display = "block";
  });

  tarjeta.addEventListener("mouseleave", () => {
    popup.style.display = "none";
  });

  tarjeta.addEventListener("click", () => {
    tarjeta.classList.toggle("aprobado");

    const contador = columna.querySelector(".contador-creditos");
    let total = parseInt(contador.dataset.creditos);

    if (tarjeta.classList.contains("aprobado")) {
      total += ramo.creditos;
    } else {
      total -= ramo.creditos;
    }

    contador.dataset.creditos = total;
    contador.textContent = `Créditos seleccionados: ${total}`;
  });

  columna.appendChild(tarjeta);
});
