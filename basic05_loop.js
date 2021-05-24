let carArray = ["bmw", "sonata", "tico"];
for (let i = 0; i < carArray.length; i++) {
  let car = carArray[i];
  //   console.log(car);
}

for (x of carArray) {
  //   console.log(x);
}

carArray.map((car) => {
  console.log(car);
});

carArray.map(function (car) {
  console.log(car);
});
