function ownProperties(obj) {
    const propertyNames = Object.getOwnPropertyNames(obj);
    for (const propName of propertyNames) {
      if (obj.hasOwnProperty(propName)) {
        console.log(`Key: ${propName}, Value: ${obj[propName]}`);
      }
    }
  }

const person = {
    name: 'Ivan',
    age: 30,
    city: 'Moscow',
  };
  
ownProperties(person);