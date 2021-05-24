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

let car2 = {
  name: "bmw",
  ph: "500ph",
  start: function () {
    console.log("engine start");
  },
  stop: function () {
    console.log("engine stop");
  },
};

let car3 = {
  name: "tico",
  ph: "500ph",
  start: function () {
    console.log("engine start");
  },
  stop: function () {
    console.log("engine stop");
  },
};

let cars = [car, car2, car3];
console.log(cars);

//#work 배열에서 bmw 라는 자동차가 있으면 시동을 걸어어주세요
//array.map 함수를 활용하여 작성 바랍니다.
//if(condition) if(hour ===  12) { 해당 구문 실행 }

cars.map((car) => {
  if (car.name === "bmw") {
    console.log(car.name);
    car.start();
  }
});

//-------------- work ----------------
