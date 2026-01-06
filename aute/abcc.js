/*
原型链
*/
// function Abc(name) {
//     this.name = name;
//     this.age = 20;
// }

// Abc.prototype.identity = "student";

// function Defg(name, identity) {
//     Abc.call(this);
//     this.name = name;
//     this.identity = identity;
// }

// // Defg.prototype = Object.create(Abc.prototype);

// Defg.prototype.wakeup = function(really) {
//     console.log(`wakeuped ${really}!`);
// }

// const test_defg = new Defg("li", "child");

// console.log(test_defg.identity);
// console.log(test_defg.name);
// console.log(test_defg.age);
// test_defg.wakeup("yes")

/*
this指向
*/
// function fn() {
//     console.log(this);
// }

// fn();

// const obj1 = { name: "obj1" };
// const obj2 = { name: "obj2" };

// function fn() {
//     console.log(this.name);
// }

// fn.call(obj1); // obj1（立即执行）
// fn.apply(obj2); // obj2（立即执行，参数传数组）
// const bindFn = fn.bind(obj1); // 绑定后不执行，返回新函数
// bindFn(); // obj1

// const obj = {
//     name: "obj",
//     fn1: function () {
//         // 普通函数：this指向obj
//         const fn2 = () => {
//             console.log(this.name); // 继承fn1的this → obj
//         };
//         fn2();
//     },
//     fn3: () => {
//         console.log(this.name); // 继承全局this → window.name（空）
//     }
// };

// obj.fn1(); // obj
// obj.fn3(); // undefined

// const test_a = {
//     name: "shui",
//     func_a: function () {
//         const nnn = () => {
//             console.log(this.name);
//         }
//         nnn();
//     }
// }
// test_a.func_a();