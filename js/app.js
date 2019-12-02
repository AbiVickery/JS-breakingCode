var foo = 'marvel'; // marvel is not defined
{
    var iron = 'Iron Man';
    let tony = 'Tony Stark';
    const black = 'Black Widow';
    console.log(iron);
    console.log(tony);
    console.log(black);
}
// console.log(marvel); // not defined
console.log(tony); // tony is not defined

var baz = 'dc'; // dc is not defined
{
    var bat = 'Batman';
    let sup = 'Superman';
    const lan = 'Green Lantern';
    console.log(bat);
    console.log(sup);
    console.log(lan);
}
// console.log(dc); // dc is not defined
console.log(bat);

var yo = 'DoctorWho'; // DoctorWho is not defined
{
    var ten = '10th Doctor';
    let elev = '11th Doctor';
    const twel = '12th Doctor';
    console.log(ten);
    console.log(elev);
    console.log(twel);
}
// console.log(DoctorWho); // DoctorWho is not defined
console.log(ten);


var fam = 'mlp'; // mlp is not defined
{
    var loo = 'Luna';
    let cel = 'Celestia';
    const chry = 'Chrysalis';
    console.log(loo);
    console.log(cel);
    console.log(chry);
}
// console.log(mlp); // mlp is not defined
console.log(loo);

var pkm = 'Pokemon';
{
    var pika = 'Pikachu';
    let eve = 'Eevee';
    const bul = 'Bulbasaur';
    console.log(pika);
    console.log(eve);
    console.log(bul);
}
// console.log(pkm); // pkm is not defined
console.log(pika);



var hello = 'world';
let world = 'hello';
const helloWorld = 'hello world!';

{
    console.log(world);
    console.log(hello);
    let foo = helloWorld;
    console.log(foo);
}

let fooBar = foo + hello + world;
console.log(fooBar);

// data types
let string = 'string'; // string
let anotherString = "another string"; // string
let intString = '0';
let escapeChar = "We can't put a single quote in a string"; 
let escapeChar2 = "He said 'this would work'";
let escapeChar2 = "he said\"this would work\"";
let int = 0; // integer
let int = 2.1; // integer
let bool = false; // boolean
let bool2 = true; // boolean

let arr = []; // array
let obj = {}; // object


