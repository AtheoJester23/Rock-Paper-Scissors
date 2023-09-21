// subscribe and Rock Paper Scissors Game:
let robotmove = "";

                let scores = JSON.parse(localStorage.getItem('scores'));

                if(scores === null){
                    scores = {                
                        Wins: 0,
                        Loses: 0,
                        Ties: 0,
                    };
                };
                

                

                function cmove(){
                    const computer = Math.random();

                    if (computer >= 0 && computer < 1/3){
                        robotmove = "rock";
                    }else if (computer >= 1/3 && computer < 2/3){
                        robotmove = "paper";
                    }else if (computer >= 2/3 && computer < 1){
                        robotmove = "scissors";
                    }
                }

                function RPC(yourMove){
                    cmove();
                    
                    let rsult = "";

                    if(yourMove === "rock"){
                        if (robotmove === "scissors"){
                            rsult = "You Win!";       
                        }else if(robotmove === "paper"){
                            rsult = "You Lose!";
                        }else if(robotmove === "rock"){
                            rsult = "Tie!";
                        }
                    }else if(yourMove === "paper"){
                        if(robotmove === "scissors"){
                            rsult = "You Lose!"
                        }else if(robotmove === "paper"){
                            rsult = "Tie!"
                        }else if(robotmove === "rock"){
                            rsult = "You Win!";
                        }
                    }else if(yourMove === "scissors"){
                        if (robotmove === "scissors"){
                            rsult = "Tie!";
                        }else if(robotmove === "paper"){
                            rsult = "You Win!";
                        }else if(robotmove === "rock"){
                            rsult = "You Lose!"
                        }
                    }

                    if (rsult === "Tie!"){
                        scores.Ties += 1;
                    }else if(rsult === "You Win!"){
                        scores.Wins += 1;
                    }else if(rsult === "You Lose!"){
                        scores.Loses += 1;
                    }

                    localStorage.setItem('scores', JSON.stringify(scores));

                    console.log(rsult)
                    console.log(scores);
                    document.querySelector('.theResult').innerHTML = `${rsult}`;
                    document.querySelector('.chose').innerHTML = `You <img src="Icons/${yourMove}-emoji.png" class = "iconsRPC"> <img src="Icons/${robotmove}-emoji.png" class = "iconsRPC" > Computer`;
                    document.querySelector('.overall').innerHTML = `Wins: ${scores.Wins}, Loses: ${scores.Loses}, Ties: ${scores.Ties}`;
                }

                // function resetScore(){
                //     document.querySelector('.overall').innerHTML = `Wins: ${scores.Wins}, Loses: ${scores.Loses}, Ties: ${scores.Ties}`;
                // }


                function sub(){
                    const stats = document.querySelector('.js-subscribe');
            
                    if(stats.innerText === 'Subscribe'){
                        stats.innerHTML = 'Subscribed';
                        stats.classList.add('subbed');
                    }else{
                        stats.innerHTML = 'Subscribe';
                        stats.classList.remove('subbed');
                    }
                }


// Amazon Shipping Calculator:
function cartCalc(){
    const inp = (document.querySelector('.theInput'));
    // console.log(inp.value)
    if (Number(inp.value) < 0 ){
        const rejected = document.querySelector('.price');
        if(!rejected.classList.contains('red')){
            rejected.classList.add('red');
        }

        document.querySelector('.price').innerHTML = 'Error: cost cannot be less than $0';
        return;
    }


    let cost = Number(inp.value) * 100;

    if (cost < 4000 > 0){
        cost = cost + 1000;
        const blackInk = document.querySelector('.price');
        if(blackInk.classList.contains('red')){
            blackInk.classList.remove('red');
        }
    }


    
    console.log(cost);
    // console.log(inp);
    

        document.querySelector('.price').innerHTML = `$${cost / 100}`;

    
}

// 9a n 9b buttons, the coin, and the submit name:
function nameKey(){
    if(event.key === 'Enter'){
        theName();
    }
}

function theName(){
    const pushbutton = document.querySelector('.push');  
    let yourname = document.querySelector(".Namebox");
    document.querySelector('.displayName').innerHTML = `Your name is: ${yourname.value}`;
}

function coin(){
    const coinChoice = document.querySelector('.theHead')
    document.querySelector('.chosen').innerHTML = 'You chose Heads.';
}

function coin2(){
    const coinChoice2 = document.querySelector('.theTail');
    document.querySelector('.chosen').innerHTML = "You chose Tails.";
}

function nineA(){
    const click = document.querySelector('.button9a')
    console.log(click);
}

function nineB(){
    let buttonb = document.querySelector('.button9b');
    if(buttonb.innerText === '9b'){
        buttonb.innerHTML = '9b done!';
    }else{
        buttonb.innerText = '9b';
    }
}

//Live update:
function updatelive(){
    const theletters = document.querySelector('.textBox2');
    document.querySelector('.liveType').innerHTML = theletters.value;
}

//Cart:
let cart = 0;

            displayCart();

            function cartcalculation(num){
                if (cart + num > 10){
                    alert("The Cart is Full!");
                    return;
                }

                if (cart + num < 0){
                    alert("Nothing on the cart to remove.");
                    return;
                }

                cart += num;
                displayCart();
            }

            function displayCart(){
                document.querySelector('.cartValue').innerHTML = `Cart Quantity: ${cart}`
            }

//Lesson 10 Exercises:
function gamingButtonStuff(selected){
    const gamingButtonclass = document.querySelector(selected);

    if(!gamingButtonclass.classList.contains('gamingButtontwo')){
        turnOff();
        gamingButtonclass.classList.add('gamingButtontwo');
    }else{ 
        gamingButtonclass.classList.remove('gamingButtontwo');
    }
}

function turnOff(){
    const turnOffPrevious = document.querySelector('.gamingButtontwo');
    if(turnOffPrevious){
        turnOffPrevious.classList.remove('gamingButtontwo');
    }
}

//calculator:


let calculatorNumba = localStorage.getItem('calculatorNumba' || '');

function buttonclick(numba){
    const calcButton = document.querySelector('.buttonclick');

    calculatorNumba += numba;
    displayCalculator();


    localStorage.setItem('calculatorNumba', calculatorNumba);

    
}

function displayCalculator(){
    document.querySelector('.displayNumbers').innerHTML = calculatorNumba;
}

displayCalculator();

//Lesson 11:
let Arey = [{}];

function addInArray(){
    const addButton = document.querySelector('.arrayAdd');
    const addInput = document.querySelector('.arrayOne');

    let Something = addInput.value;
    Arey.push(Something);
    
    console.log(Arey);
    addInput.value = '';
}

let Areytwo = [];

//Idk why date's not being deleted, splice clearly can delete all in array.
// console.log(Areytwo.push({name: 'abcde', numba: 'one'}));
// console.log(Areytwo.splice(0, 1));
// console.log("");
// console.log(Areytwo);

function addInArray2(){
    const addButton = document.querySelector('.arrayAddtwo');
    const addInput = document.querySelector('.arrayTwo');
    const theDate = document.querySelector('.dueDate');
    const dueDate = theDate.value;


    let name = addInput.value;
    
    Areytwo.push({
        name,
        dueDate
    });


    

    let theLoop = '';

    for(let n = 0; n < Areytwo.length; n++){
        const doDo = Areytwo[n];
        const { name, dueDate } = doDo;
        const doDoDo = 
        `<div style = "height: 50px; display: flex;  align-items: center;font-family: Arial; font-size: 15px;">${name}</div> 
         <div style = "height: 50px; display: flex;  align-items: center; font-family: Arial;
         font-size: 15px;">${dueDate}</div> 
         <button style = "background-color: rgb(192, 1, 1); border: none; color: white; cursor: pointer;" onclick = "Areytwo.splice(${n}, 1); addInArray2(); ">
                Delete
         </button>
        `;
        theLoop += doDoDo;
    }

    

    document.querySelector('.toDotwo').innerHTML = `${theLoop}`;

    addInput.value = '';

}

//Lesson 11 Exercises:
//11a:
// const nums = [10, 20, 90];
// nums[2] = 99;
// console.log(nums);

//11b:
// function getLastValue(array){
//     const lastnum = array.length - 1;
//     const theValue = array[lastnum];
//     console.log(theValue);
// }

// getLastValue(nums);

//11c:
// function arraySwap(thisArray){
//     const one = thisArray[0];
//     const last = thisArray.length -1;
//     const theValue = thisArray[last];
//     thisArray[0] = theValue;
//     thisArray[last] = one;
//     console.log(thisArray);
// }

// arraySwap(nums);

// //11d:
// for(let o = 0; o <= 10; o+= 2){
//     console.log(o);
// }

// //11e:
// for(let o = 5; o >= 0; o--){
//     console.log(o);
// }

//11f:
// let a = 0;
// while(a < 10){
//     a += 2;
//     console.log(a);
// }

// let b = 5;
// while(b >= 0){
//     console.log(b);
//     b--;
// }

//11g:

// let elevenG = [1, 2, 3]
// let elevenG2 = [2, 3, 4]
// console.log(elevenG);

// for(let g = 0; g < elevenG.length; g++){
//     // console.log(`First ${elevenG}`)
//     elevenG[g] = elevenG2[g];
// }

// console.log(elevenG);

//11h:
// let elevenH = [1, 2, 3];
// let elevenH2 = [-2, -1, 0, 99];
// console.log(elevenH);

// function addOne(array){
//     for(let h = 0; h < array.length; h++){
//         array[h] += 1;
//     }

//     console.log(array);
// }

// addOne(elevenH);

// console.log(elevenH2);
// addOne(elevenH2);

//11i:
// let elevenA = [1, 2, 3];
// let elevenB = [-2, -1, 0, 99];
// console.log(elevenA);
// console.log(elevenB);

// function addNum(array, num){
//     for(let c = 0; c < array.length; c++){
//         array[c] += num;
//     }
//     console.log(array);
// }

// addNum(elevenA, 2);
// addNum(elevenA, 3);
// addNum(elevenB, 2);

//11j:
// let elevenJ = [1,1,2];
// let elevenJ2 = [1,1,3];
// let elevenJ3 = [1,2,3];
// let elevenJ4 = [4,5,6];

// let lagayan = [];

// function addArrays(array1, array2){
//     for(let j = 0; j < array1.length; j++){
//         let variable = array1[j] += array2[j];
//         lagayan.push(variable);
//     }

//     console.log(lagayan);
// }   

// // addArrays(elevenJ, elevenJ2);
// addArrays(elevenJ3, elevenJ4);

//11k:
// let elevenK = [1,-3,5];
// let elevenK2 = [-2, 3, -5, 7, 10];
// let countingEven = 0;


// function countPositive(nums){
    
//     for(let k = 0; k < nums.length; k++){
//         if(nums[k] > 0){
//             countingEven++;
//          }
//     }

//     return countingEven;
// }

// countPositive(elevenK);
// console.log(elevenK);
// console.log(`Even Numbers: ${countingEven}`);
// countingEven = 0;
// console.log('')
// countPositive(elevenK2);
// console.log(elevenK2)
// console.log(`Even Numbers: ${countingEven}`)

// 11I:
// const elevenI = [1,-3,5];
// const elevenI2 = [];
// const elevenL3 = [3]


// function minMax(nums){
//     const comparison = {
//         minimum: null,
//         maximum: null
//     };
    
//     for(let i = 0; i < nums.length; i++){
//         const theValue = nums[i];

//         if(comparison.minimum === null || theValue < comparison.minimum){
//             comparison.minimum = theValue;
//         }
        
//         if(comparison.maximum === null || theValue > comparison.maximum){
//             comparison.maximum = theValue;
//         }
//     }
//     return comparison;
// }






// console.log(minMax(elevenL3));




















// ElevenN:
// let elevenN = ['apple', 'grapes', 'apple', 'apple', 'orange', 'orange'];

// function countWords(words){
//     const countWords = {};

//     for(let w = 0; w < words.length; w++){
//         const counting = words[w];

//         if (!countWords[counting]){
//             countWords[counting] = 1;
//         }else{
//             countWords[counting]++;
//         }
//     }

//     return countWords;

// }

// console.log(countWords(elevenN));

// const arey = [{testing: 1}]
// arey[0].stuff = "abc";
// console.log(arey)

//How to add property and property attributes in object:
// const objict = {};

// objict.testing = 1;
// objict['testeng'] = "this too can be used";

// console.log(objict);
 
//Lesson 11(Part 2):
//11o and p:
// const aLoop = ['test', 'search','not', 'search','abcde'];
//let index = -1;


// for(let t = 0; t < aLoop.length; t++){
//     const theV = aLoop[t];
    
//     if(theV === 'search'){
//         index = t;
//         break;
//     }
// }

// console.log(index);

//11q:
// const theWords = ['green', 'none', 'blue'];

// function findIndex(array, word){
//     let nada = -1;

//     for(let q = 0; q < array.length; q++){
//         const theQ = array[q];

        
//         if(theQ === word){
//             nada = q;
//             break;
//         }
//     }

//     console.log(nada);
// }


// findIndex(theWords, 'red');


//11r turned to 11s, turned to 11t turned to 11u:
// const theFoods = ['egg', 'apple', 'egg', 'egg', 'ham'];

// function skipEgg(foods){
//     const origA = foods.slice();
//     const reversedOrig = origA.reverse();
//     let newList = [];
//     let eggs = 0;
    
//     for(let t = 0; t < reversedOrig.length; t++){
//         const forT = reversedOrig[t];
        
        
//         if(forT === 'egg' && eggs < 2){
//             eggs++;
//             continue;
//         }
    
//         newList.push(forT);
//     }

//     newList.reverse();

//     console.log(newList);
//     console.log(foods);
// }

// skipEgg(theFoods);

//11v.
// for(let v = 1; v <= 20; v++){
//     if(v % 3 === 0 && v % 5 == 0){
//         console.log('FizzBuzz');
//         continue;
//     }
    
//     if(v % 3 === 0 ){
//         console.log('Fizz');
//         continue;
//     }
//     if(v % 5 === 0){
//         console.log('Buzz');
//         continue;
//     }
    
    
//     console.log(v);
// }


// 11w with the help of q:
// const theWords = ['green', 'red', 'blue', 'red'];

// function findIndex(array, word){
//     for(let q = 0; q < array.length; q++){
//         const theQ = array[q];
//         if(theQ === word){
//             return q;
//         }
//     }

//     return -1;
// }


// function unique(oneOnly){
//     let oneOnly2 = [];

//     for(let w = 0; w < oneOnly.length; w++){
//         let noDoble = oneOnly[w];

//         if(findIndex(oneOnly2,noDoble) === -1){
//             oneOnly2.push(noDoble);
//         }
//     } 

//     return oneOnly2;
    
    

//     // findIndex(oneOnly, double)
// }

// console.log(unique(theWords));

//11x:
//In the other File.

//Lesson 12:
// function testingtesting(){
//     console.log('test');
// }
// const abcde = testingtesting();

// [
//     'Test',
//     'Testing',
//     'Test2'
// ].forEach(function(value, index){
//     console.log(index);
//     console.log(value);  
// })

//Exercises:
//12a:
let add = function(){console.log(2+3);};

// add();
// add();

//12b:
function runTwice(fun){
    for(let rn = 0; rn < 5; rn++){
        fun();    
    }

}


function b(){console.log('testing');}

runTwice(add);
runTwice(b);




