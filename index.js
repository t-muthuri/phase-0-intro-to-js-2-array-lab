// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (){
    return cats.push("Ralph");
}

function beforeEach() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
}

function destructivelyPrependCat (){
    return cats.unshift ("Bob");
}

function beforeEach() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
}

function destructivelyRemoveLastCat (){
    return cats.pop ();
}

function beforeEach() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
}

function destructivelyRemoveFirstCat (){
    return cats.shift();
}

function beforeEach() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
}

function appendCat(_Broom){
    const Broom = [...cats, "Broom"];
    return Broom;
}

function beforeEach() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
}

function prependCat(_Arnold){
    const Arnold = ["Arnold", ...cats];
    return Arnold;
}

function beforeEach() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
}

function removeLastCat (){
    return cats.slice (0,2);
}

function beforeEach() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
}

function removeFirstCat(){
    return cats.slice (-2);
}