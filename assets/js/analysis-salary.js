//import { colombia } from "./salary";
const colombia = [
  { name: "Camila", salary: 500 },
  { name: "Nath", salary: 1500 },
  { name: "Luisa", salary: 1800 },
  { name: "Laura", salary: 1000 },
  { name: "Daniela", salary: 2200 },
  { name: "Esperancita", salary: 200 },
  { name: "Carla", salary: 500 },
  { name: "Antonieta", salary: 1500 },
  { name: "Alicia", salary: 1300 },
  { name: "Ana", salary: 2400 },
  { name: "Julia", salary: 3400 },
  { name: "Rosa", salary: 400 },
  { name: "Angélica", salary: 400 },
  { name: "Tatiana", salary: 400 },
  { name: "Lorena", salary: 600 },
  { name: "Carolina", salary: 1600 },
  { name: "Fernanda", salary: 2600 },
  { name: "Nora", salary: 1000 },
  { name: "Gisselle", salary: 2000 },
  { name: "Bill Gates", salary: 100000000 },
];

/*
 *  Helpers
 */
// Identifica si es para o impar
const isEvent = (numberValid = 0) => numberValid.length % 2 === 0;

// Ordenar el salario
function sortedSalary(arraySalary) {
  return arraySalary
    .map(({ name, salary }) => {
      return salary;
    })
    .sort((a, b) => a - b);
}

/*
 *  Business
 */
// Promedio
function arithmeticAverage(oCollection) {
  // let sumList = 0;
  // oCollection.forEach(element => {
  //   sumList = sumList + element;
  // });

  const sumCollection = oCollection.reduce(
    (valueAccumulated = 0, valueCurrent) => {
      return (valueAccumulated = valueAccumulated + valueCurrent);
    }
  );

  return sumCollection / oCollection.length;
}

// Mediana salarial
function medianSalary(listSalary) {
  const middle = parseInt(listSalary.length / 2);

  // Par
  if (isEvent(listSalary)) {
    const newArray = [listSalary[middle - 1], listSalary[middle]];
    return arithmeticAverage(newArray);
  }
  // Impar
  if (!isEvent(listSalary)) {
    return listSalary[middle];
  }
}

// Mediana top 10%
function medianSalaryTop(listSalary) {
  const arrayTop = [...listSalary];
  let startCut = (arrayTop.length * 90) / 100;
  let endCut = arrayTop.length - startCut;

  return arrayTop.splice(startCut, endCut);
}

const salaryCountry = sortedSalary(colombia);

const medianaGeneral = medianSalary(salaryCountry);
const medianaTop = medianSalaryTop(salaryCountry);

console.log({
  salaryCountry,
  medianaGeneral,
  medianaTop,
});
