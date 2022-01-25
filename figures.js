// Square code
const squareSide = 5;
const squarePerimeter = squareSide * 4;
const squareArea = squareSide * squareSide;

console.group("==== Cuadrado ====");
console.log("Lado del cuadrado: " + squareSide + "cm");
console.log("Perimetro del cuadrado: " + squarePerimeter + "cm");
console.log("Área de cuadrado: " + squareArea + "cm²");
console.groupEnd();

// Triangle code

const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;
const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
const triangleArea = (triangleBase * triangleHeight) / 2;

console.group("==== Triangulo ====");
console.log(
  "Los lados del triangulo son " +
    triangleSide1 +
    "cm, " +
    triangleSide2 +
    "cm, " +
    triangleBase +
    "cm"
);
console.log("La altura del triangulo: " + triangleHeight + "cm");
console.log("Perimetro del triangulo: " + trianglePerimeter + "cm");
console.log("Área del triangulo: " + triangleArea + "cm²");
console.groupEnd();

// Circle code
const circleRadio = 4;
const circleDiameter = circleRadio * 2;
const PI = Math.PI;
const circlePerimeter = Math.round(circleDiameter * PI);
const circleArea = Math.round(circleRadio * circleRadio * PI);

console.group("==== Circulo ====");
console.log("Radio del circulo: " + circleRadio + "cm");
console.log("Diametro del circulo: " + circleDiameter + "cm");
console.log("Perimetro del circulo: " + circlePerimeter + "cm");
console.log("Área del circulo: " + circleArea + "cm²");
console.groupEnd();
