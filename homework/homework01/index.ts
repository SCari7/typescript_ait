//Task 1

let x = 42;
//x = "Hello" //Type 'string' is not assignable to type 'number'.

//Task 2
let l: string = "TypeScript is awesome!";
console.log(l);

//Task 3
type Age = number;
let myAge = 30;

//Task 4
let status1: string | number = "active";
status1 = 1;
console.log(status1);

//Task 5

type Animal = "cat" | "dog";

type ExtendedAnimal = Animal | "parrot";
let animal: ExtendedAnimal;
animal = "parrot";
console.log(animal);

//Task 6

let fruits: string[] = ["apple", "banana"];

console.log(fruits);

//Task 7
let numbers: number[] = [];
numbers.push(5, 10);
console.log(numbers);

//Task 8
type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "Alex",
  age: 33,
};

//Task 9
interface Car {
  model: string;
  year: number;
  isElectric: boolean;
}
const car: Car = {
  model: "BMW",
  year: 2025,
  isElectric: true,
};
// Task 10
interface ElectricCar extends Car {
  batteryCapacity: number;
}
const electricCar: ElectricCar = {
  batteryCapacity: 10000,
  model: "Tesla",
  year: 2025,
  isElectric: true,
};
// Task 11
interface Book {
  title: string;
  author: string;
  publishedYear?: number;
}

const book1: Book = {
  title: "Alice In Wonderland",
  author: "Lewis Carroll",
};
const book2: Book = {
  title: "°C – Celsius",
  author: "Marc Elsberg",
  publishedYear: 2021,
};

//Task 12

interface City {
  name: string;
  populations: number;
  isCapital: boolean;
  riversName?: string;
}

const city1: City = {
  name: "Berlin",
  populations: 1000000,
  isCapital: true,
};

//Task13

interface ExtendedCity extends City {
  foundationYear: number;
}
const city2: ExtendedCity = {
  name: "München",
  populations: 1500000,
  isCapital: false,
  riversName: "Isar",
  foundationYear: 1158,
};

//Task 14
function multiply(a: number, b: number): number {
  return a * b;
}
const result = multiply(5, 3);
console.log(result);

//Task 15
const isEven = (num: number): boolean => num % 2 === 0;
console.log(isEven(7));
console.log(isEven(4));
//Task 16

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet("Karina");

//Task17
function getLastElement(arr: number[]): number {
  return arr[arr.length - 1];
}
const numbers1 = [1, 2, 3, 4, 9];
console.log(getLastElement(numbers1));

//Task18

function describeWeather(weather: "sun" | "rain" | "snow"): string {
  return weather === "sun"
    ? "It's a sunny day!"
    : weather === "rain"
    ? "It's raining."
    : "It's snowing!";
}

console.log(describeWeather("rain"));

//Task19

interface Car1 {
  make: string; // марка машины
  model: string; // модель машины
  year: number; // год выпуска
  color: string; // цвет машины
}

function printCarInfo(car: Car1): void {
  console.log(`Car Information:`);
  console.log(`Make: ${car.make}`);
  console.log(`Model: ${car.model}`);
  console.log(`Year: ${car.year}`);
  console.log(`Color: ${car.color}`);
}

const myAuto: Car1 = {
  make: "BMW",
  model: "X5",
  year: 2025,
  color: "Blue",
};

printCarInfo(myAuto);

//Task20
function getFullName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName;
}
console.log(getFullName("Steshenko", "Karina"));
console.log(getFullName("Dmitri"));
