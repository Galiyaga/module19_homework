function checkProperty(propertyName, object) {
    return propertyName in object;
}

const myObject = {
    name: "Ivan",
    age: 30,
};

console.log(checkProperty("name", myObject));
console.log(checkProperty("address", myObject));