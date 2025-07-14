document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("malla-container");
  }
  for (let i = 1; i <= 10; i++) {
    const columna = document.createElement("div");
    columna.classList.add("semestre");
    columna.dataset.semestre = i;

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${i}`;
    columna.appendChild(titulo);

    contenedor.appendChild(columna);
  }
  ramos.forEach((ramo) => {
    const columna = document.querySelector(`.semestre[data-semestre="${ramo.semestre}"]`);
    if (!columna) return;

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("ramo");
    tarjeta.dataset.tipo = ramo.tipo;
    tarjeta.textContent = ramo.nombre;
  }
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
    });

    columna.appendChild(tarjeta);
  });
});
