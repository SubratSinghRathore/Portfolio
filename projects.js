const sym = Symbol("aman")
const months = {
    "Number": "january",
    [sym]: "february",
    "name aman": "aman singh",
    "func add": function add(a, b) {
        return a + b;
    }
}
console.log(Object.values)