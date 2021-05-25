let car = {
  name: "sonata",
  ph: "500ph",
  start: function () {
    console.log("engine start");
  },
  stop: function () {
    console.log("engine stop");
  },
};

let carArray = ["bmw", "sonata", "tico", 123, 12.23124, car];

// String [] carNameList = new String[3];

console.log(carArray[0]);
console.log(carArray[1]);
console.log(carArray[2]);
console.log(carArray[3]);
console.log(carArray[4]);
console.log(carArray[5]);
