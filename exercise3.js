// Exercise 3: Convert a Class to a Function Prototype
// Instructions: 
// 1. Below is a class called "Person". Your task is to convert this class into a constructor function with methods defined on its prototype.
// 2. Ensure the functionality remains the same after converting.


// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
  
//   greet() {
//     console.log(`Hello, my name is ${this.getFullName()}.`);
//   }
// }

// コンストラクタ関数
function Person(name, age) {
  this.name = name; // インスタンスごとの名前
  this.age = age;   // インスタンスごとの年齢
}

// greet メソッドをプロトタイプに追加
Person.prototype.greet = function() {
  console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// haveBirthday メソッドをプロトタイプに追加
Person.prototype.haveBirthday = function() {
  this.age += 1;
  console.log(`Happy Birthday! ${this.name} is now ${this.age} years old.`);
};



// Test the Person constructor function
const john = new Person("John", "Doe");
john.greet();  // Output: Hello, my name is John Doe.