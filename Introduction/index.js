"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleCase = exports.exampleIf = exports.addDogs = exports.eatFood = exports.loopCats = exports.displayCats = exports.addCat = exports.Actions = exports.testFunction = void 0;
// for testing typescript
const testFunction = () => {
    console.log("Amazing");
    console.log("Awesome");
    console.log("Changed again");
    console.log("test change");
    return true;
};
exports.testFunction = testFunction;
// variables with types
var parent;
parent = 4;
parent = "string";
// first (built-in)
var x = 4;
var y = "seiji";
var z = true;
(0, exports.testFunction)();
// second (user-defined) arrays enums interfaces
// Arrays
var nameArray = [];
var otherArray = new Array(10);
nameArray.push("Seiji");
otherArray.push("John Deo");
//  Enums
var Actions;
(function (Actions) {
    Actions[Actions["Create"] = 0] = "Create";
    Actions[Actions["Read"] = 1] = "Read";
    Actions[Actions["Update"] = 2] = "Update";
    Actions[Actions["Delete"] = 3] = "Delete";
})(Actions = exports.Actions || (exports.Actions = {}));
// var cat: Cat[] = [];
var cat = [];
const addCat = (data) => {
    cat.push(data);
    (0, exports.displayCats)();
};
exports.addCat = addCat;
const displayCats = () => {
    let list = document.getElementById("myList");
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    cat.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.displayCats = displayCats;
const loopCats = () => {
    // for loop
    for (let i = 0; i < cat.length; i++) {
        console.log(cat[i]);
    }
    // for (short hand)
    for (let data of cat) {
        console.log("using of for");
        console.log(data);
    }
    // for (short hand but using index)
    for (let data in cat) {
        console.log("using in for");
        console.log(cat[data]);
    }
    // while
    let i = 0;
    while (i < cat.length) {
        console.log("using while");
        console.log(cat[i]);
        i++;
    }
    //    cat.forEach((data: Cat) => {
    //     console.log("using forEach")
    //     console.log(data)
    //    });
    //    cat.map((data: Cat) => {
    //     console.log("using map")
    //     console.log(data);
    //    })
};
exports.loopCats = loopCats;
const eatFood = (food) => {
    return "I ate " + food + ", I am full!";
};
exports.eatFood = eatFood;
var dogs = [];
const addDogs = (...dogArray) => {
    for (let data of dogArray) {
        dogs.push(data);
    }
    console.log(dogs);
};
exports.addDogs = addDogs;
const exampleIf = () => {
    var cond = true;
    if (cond) {
    }
    else {
    }
};
exports.exampleIf = exampleIf;
const exampleCase = (value) => {
    switch (value) {
        case "case 1":
            break;
        case "case 2":
            break;
        default:
    }
};
exports.exampleCase = exampleCase;
var tuple = ["", 1];
var newCat = {
    name: "Garfield",
    breed: "Siberian",
    eat: () => (0, exports.eatFood)("Chicken")
};
// addCat(newCat);
// addDogs("Dog1", "Dog2", "Dog3");
// newCat.name = "Tom"
// addCat(newCat);
// loopCats();
