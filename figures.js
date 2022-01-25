// Square code
function squarePerimeter() {
  const squareSide = document.getElementById("squareSide").value;
  const squareResult = document.getElementById("square-result-perimeter");

  squareResult.innerHTML = squareSide * 4;
  return;
}

function squareArea() {
  const squareSide = document.getElementById("squareSide").value;
  const squareResult = document.getElementById("square-result-area");

  if (squareSide <= 0) {
    squareResult.innerHTML = "El lado del cuadrado debe ser mayor a 0";
    return;
  }

  squareResult.innerHTML = squareSide * squareSide;
  return;
}

// Circle code
function circleDiameter(Radio) {
  return Radio * 2;
}

function circlePerimeter() {
  const circleRadio = document.getElementById("circleRadio").value;
  const Diameter = circleDiameter(circleRadio);
  const circleResult = document.getElementById("circle-result-perimeter");

  circleResult.innerHTML = Math.round(Diameter * Math.PI);
  return;
}

function circleArea(Radio) {
  const circleRadio = document.getElementById("circleRadio").value;
  const circleResult = document.getElementById("circle-result-area");

  circleResult.innerHTML = Math.round(circleRadio * circleRadio * Math.PI);
  return;
}

// Triangle code
function trianglePerimeter(Side1, Side2, Base) {
  if (Side1 <= 0 || Side2 <= 0 || Base <= 0) {
    return `Los dos lados y la base del triangulo deben ser mayor a 0`;
  }

  return Side1 + Side2 + Base;
}

function triangleArea(Base, Height) {
  if (Base <= 0 || Height <= 0) {
    return `La base y la altura del triangulo deben ser mayor a 0`;
  }

  return (Base * Height) / 2;
}
