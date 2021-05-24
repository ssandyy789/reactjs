
/*
1. Let and Const
2.Destructuring
3.Templete Strings
4.Default Arguments
5.Object Properties
6.Arrow Function
*/

// 1. var, let And const
function check () {
  const a = 5

  if (true) {
    const a = 10
    document.writeln(a)
    document.write('<br>')
  }

  document.write(a)
}
document.writeln('Value with Let and Cont key <br>')
check()

function check2 () {
  var a = 5

  if (true) {
    var a = 10
    document.writeln(a)
    document.write('<br>')
  }

  document.write(a)
}
document.write('<br>')
document.writeln('value with Var Key <br>')
check2()

const s = { name: 'sandeep', age: 25, address: 'Hazaribagh' }

// complex call
const x = s.name
const w = s.age
document.write('<br>' + x)
document.write('<br>')
document.write(w)
// else
document.write('<br>')
document.write(s.name + ' and my age is ' + s.age)
document.write('<br>')

// 2. De-Structuring
// so in ES6 it simplyfies on new way ( Called as object De-Structuring)
const { name, age, address } = s
// now we can easly get the value
document.write('My name is ' + name + ' my age is ' + age + ' address is ' + address)

// 3. Template strings(use of back tick) =>  `` 
let showinfo = 'My name is ' + name + ' my age is ' + age + ' address is ' + address;
document.write('<br>' + showinfo)
// insted of above long process we have got (templete strings) below:
let showinfo2 = `My name is ${name}. my age is ${age}. address is ${address}`;
document.write('<br>' + showinfo2);

// 4. Default Arguments
function studentAge(age=18) {
  return age;
}
document.write('<br>');
studentAge(); // Output is 18
studentAge(20); // O/p is 20

// 5.Object Properties
const defaultval = {myname:name, age: age, address: address}  // in above we have already assigned values (line 43)
document.write(defaultval); // Op/ in console ({name: "sandeep", age: 25, address: "Hazaribagh"})

// we also have new and simple method to get it
const showval = {name, age, address}
document.write(showval);

// 6. Arrow function
// Normal function below:
function addsum(a, b) {
  return a+b;
}
addsum(2,3); // O/P 5

// new methods with arrow function (=>) symbol also called fat arrow
let addsums = (a, b) => { return a+b }; // let/const functionName = (parameter) fatArrow(=>) { return }

addsums(2,3)  // O/P 5