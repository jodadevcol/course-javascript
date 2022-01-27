const listBalance = [
  100, 200, 200, 1050, 1000, 300, 700, 400, 500, 600, 400, 400, 10, 2000, 200,
  100, 300,
];

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

// Mediana
function arithmeticMedian(oCollection) {
  oCollection.sort((a, b) => a - b);
  const isEven = () => oCollection.length % 2 === 0;

  let half = oCollection.length / 2;
  // Par
  if (isEven()) {
    const newArray = [oCollection[half - 1], oCollection[half]];
    console.log(newArray);
    return arithmeticAverage(newArray);
  }
  // Impar
  if (!isEven()) {
    half = Math.floor(half);
    return oCollection[half];
  }
}

// Moda
function arithmeticMode(oCollection) {
  const newObject = oCollection.reduce((oPrevius, oCurrent) => {
    oPrevius[oCurrent] = (oPrevius[oCurrent] || 0) + 1;
    return oPrevius;
  }, {});

  console.log(newObject);

  const newArray = Object.entries(newObject)
    .sort((a, b) => {
      return a[1] - b[1];
    })
    .pop();

  console.log(newArray);
}
