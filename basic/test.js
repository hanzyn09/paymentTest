var a = "data_a";
var b = "data_b";
const c = 11;
const obj = {
    name : "test",
    age : 12,
}

const d = obj;

var x = 10;
{
    const x = 2;
}
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(obj);
console.log(x);