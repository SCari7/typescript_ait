// console.log("hello, ts")

// let y: number = 11;
// let p: string;
// p = "welcome to ts";

// let isDrunk: boolean = true;


// type Age = number; // Типы всегда пишутся с большой буквы

// let myAge: Age = 29;

// //Union type: yyyy|xxxx

// let k: number | string = 10;

// k = "10";
// console.log(k)

// // union

// type Pet = "cat" | "dog"
// let petOfAlex: Pet = "cat"
// petOfAlex = "dog";
// //расширение типа
// type ExtendedPet = Pet | "snake";
// let myPet: ExtendedPet;
// myPet = "snake";

// type Gender = "male" | "female";
// type ExtendedGender = Gender | "non-binary person";

// //Как типизировать массив стрингов
// let fruits: string[] = ['apple','orange','mango'];
// //особенно важно указывать при создании пустого массива что это пустой массив
// let vegetables: string[] = [];
// vegetables.push('carrot')


// type User = {
//     firstName:string
//     isAdmin:boolean

// }

// const user1: User = {
//     firstName: "Alex",
//     isAdmin: false
// }



// //monsters



// // - второй способ - очень популярный - через интерфейс 

// interface Monster {
//     name:string,
//     height:number,
//     isAlive:boolean,
//     isEvil:boolean,
//     hasTentacles:boolean
// }

// // создал объект указанного типа 

// const frankestein: Monster = {
//     name: "Frankenstein Monster",
//     height: 210,
//     isAlive: true,
//     isEvil: false,
//     hasTentacles: false
// }
// // Когда использовать interface или type:

// // Для описания объектов и их расширения предпочтительнее interface.
// // Для сложных комбинаций типов или использования примитивов выбирайте type.


// // мы можем расширять интерфейсы 
// // Мы можем создать нового монстра на основании интерфейса Монстра

// interface ExtendedMonster extends Monster {
//     isFlying:boolean;
// }

// const dracula: ExtendedMonster = {
//     name: "Vlad",
//     height: 178,
//     isAlive: false,
//     isEvil: true,
//     hasTentacles: false,
//     isFlying: true
// }

// // ?опциональные поля ?

// interface Food {
//     title: string;
//     isSweet?: boolean;
// }

// const pancake: Food = {
//     title: "pancake",
//     isSweet: true
// }
// // Создать интерфейс город City
// // со следующими полями
// //  - name
// //  - population - число горожан 
// //  - riversName - опциональное поле название реки - 
// //  - isTouristic - является ли туристическим или нет
// //  - isCapital - является ли столицей 

// // Создайте несколько объектов для этого интерфейса 

// // дополнительно сделайте интерфейс - расширяющий город
// // например, добавьте дату основания 
// interface City {
//   name:string
//   population:number
//   riversName?:string
//   isTouristic:boolean
//   isCapital:boolean
// }

// const city1: City = {
//     name:'Berlin',
//     population:8000000,
//     riversName:'spree',
//     isTouristic:true,
//     isCapital:true
// }

// const city2: City = {
//     name:'Altenburg',
//     population:70000,
    
//     isTouristic:false,
//     isCapital:false
// }
// const city3: City = {
//     name:'Hamburg',
//     population:600000,
//     riversName:'Elbe',
//     isTouristic:true,
//     isCapital:false
// }
// interface ExtendedCity extends City {
//     lakeName:string;
// }

// const city4: ExtendedCity = {
//     lakeName: "Eibsee",
//     name: "Bayern",
//     population: 800000,
//     isTouristic: true,
//     isCapital: false
// }



// //типизация функций

// function sum (a:number, b:number): number{
//     return a+b;
// }
// const dev = (a:number, b:number): number => a/b;

// console.log(sum(10,12));
// console.log(dev(20,2));

// function toUpper(str:ExtendedPet): string{
//     return str.toUpperCase();
    
// }
// console.log(toUpper("cat"));


// function toLower(str:ExtendedPet): string{
    
//     return str.toLowerCase();
// }
// console.log(toLower("snake"));

// // function toString(str:Age): number{
// //     return str.toString();
    
// // }
// // console.log(toString("Age"));
