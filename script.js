body {
  font-family: Arial, sans-serif;
  background: #f9f9f9;
  padding: 20px;
  margin: 0;
  overflow-x: hidden;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #e88abf; /* rosado fuerte */
}

#malla-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 30px;
}

.semestre {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 220px;
  margin-right: 10px;
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
}

.semestre h2 {
  text-align: center;
  margin-bottom: 10px;
  background-color: #fcd5ec; /* rosado pastel */
  padding: 5px;
  border-radius: 5px;
  width: 100%;
  color: #333;
}

.ramos {
  background-color: #ffe6f0;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
}

.ramos:hover {
  transform: scale(1.03);
}

.ramos.aprobado {
  text-decoration: line-through;
  opacity: 0.5;
}

.ramos[data-tipo="formacion"] {
  background-color: #e0e0e0;
}

.ramos[data-tipo="investigacion"] {
  background-color: #d6f0ff;
}

.creditos-popup {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #333;
  color: white;
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 3px;
  display: none;
  z-index: 10;
}
