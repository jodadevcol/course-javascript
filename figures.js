// Square code
function squarePerimeter(Side) {
  if (Side <= 0) {
    return `El lado del cuadrado debe ser mayor a 0`;
  }

  return Side * 4;
}
function squareArea(Side) {
  if (Side <= 0) {
    return `El lado del cuadrado debe ser mayor a 0`;
  }

  return Side * Side;
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

// Circle code
function circleDiameter(Radio) {
  return Radio * 2;
}

function circlePerimeter(Radio) {
  const Diameter = circleDiameter(Radio);
  return Math.round(Diameter * Math.PI);
}

function circleArea(Radio) {
  return Math.round(Radio * Radio * Math.PI);
}
