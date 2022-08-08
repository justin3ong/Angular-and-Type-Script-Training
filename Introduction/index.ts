// for testing typescript
export const testFunction = () => {
    console.log("Amazing");
    console.log("Awesome");
    console.log("Changed again");
    console.log("test change")
    return true;

}
// variables with types

var parent: any;
parent = 4;
parent = "string";
// first (built-in)
var x: number = 4;
var y: string = "seiji";
var z: boolean = true;
testFunction();
// second (user-defined) arrays enums interfaces
// Arrays
var nameArray: string[] = [];
var otherArray = new Array(10);
nameArray.push("Seiji");
otherArray.push("John Deo")
//  Enums
export enum Actions {
    Create,
    Read,
    Update,
    Delete
}
// interfaces
interface Cat {
    name: string;
    breed: string;
    eat?: (food: string) => string;
}

// var cat: Cat[] = [];
var cat: string[] = [];
export const addCat = (data: string) => {
    cat.push(data);
    displayCats();

}

export const displayCats = () => {
    let list = document.getElementById("myList");
    if(list) {
        while(list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    cat.forEach((item: string) => {
        let li = document.createElement("li");
        li.innerText = item;
        if(list) {
            list.appendChild(li);
        }
    })
}

export const loopCats = () => {
    // for loop
   for(let i = 0; i < cat.length; i++) {
    console.log(cat[i]);
   }

   // for (short hand)
   for(let data of cat) {
      console.log("using of for")
      console.log(data);
   }

   // for (short hand but using index)
   for(let data in cat ) {
    console.log("using in for")
    console.log(cat[data]);
   }
   // while
   let i = 0
   while(i < cat.length) {
    console.log("using while")
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
}

export const eatFood =(food: string) => {
    return "I ate " + food + ", I am full!"
}

var dogs: string[] = [];
export const addDogs = (...dogArray: string[]) => {
    for(let data of dogArray) {
        dogs.push(data);
    }
    console.log(dogs);
}

export const exampleIf = () => {
    var cond = true;
    if(cond) {

    } 
    else  {

    }
}

export const exampleCase = (value: string) => {
   switch(value) {
    case "case 1" :
    break;
    case "case 2" :

    break;
    default:
   }
}

var tuple: (string | number)[]  = ["", 1];

var newCat: Cat = {
    name: "Garfield", 
    breed: "Siberian", 
    eat: () => eatFood("Chicken")
    }


// addCat(newCat);
// addDogs("Dog1", "Dog2", "Dog3");
// newCat.name = "Tom"
// addCat(newCat);

// loopCats();