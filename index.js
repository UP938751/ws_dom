/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP938751`";
}

function fn() {
    return "Taylor";
}

function sn() {
    return "McFarlane";
}

//Q4
function replaceText(element, str) {
    element.textContent = str;
}

//Q5
function addTextTo(element, str) {
    element.textContent += str;
}

//Q6
function moreBears(){
    animals.src = "http://placebear.com/400/200";
    animals.alt = "A bear.";
    animals.title = "A BEAR!";

}

//Q7
function setId(element, str){
    element.id = str;
    return element;
}

//Q8
function setClass(element, str){
    element.className = str;
    return element;
}

//Q9
function addAClass(element, str){
    element.classList.add(str);
    return element;
}

//Q10
function removeAClass(element, str){
    element.classList.remove(str);
    return element;
}

//Q11
function newElement(name){
    return document.createElement(name);
}

//Q12
function findElementById(ID){
    const element = document.querySelector(`#${ID}`)
    return element;     
}

//Q13
function findElementsByQuery(query){
    return document.querySelectorAll(query)
}

/* 
Q14. Function `reverseList` that reverses the content of a UL/OL element. 
The function should take one parameter, which is a selector used to find the list whose children should be reversed.
Return the selected element.
 */
function reverseList(selector){
    const listNodes = document.querySelector(selector); //HTML collection
    const reversedListNodes = Array.prototype.slice.apply(listNodes.children).reverse(); //Array
    //remove nodes from DOM
    while (listNodes.childElementCount > 0){
        for(const child of listNodes.children){
                child.remove();
            }
        }
    //Add nodes to DOM from reversed node list
    for(const listItem of reversedListNodes){
        let newDomElement = document.createElement("li")
        newDomElement.append(listItem)
        listNodes.append(newDomElement) 
    }
    return listNodes;          
}
/* 
Q15. Create a function `mover` that accepts two parameters, 
the first is a selector for the element to move, 
the second is a selector for the element that it should be appended to.
*/

function mover(moveSelector, appendSelector) {
    const moveElement = document.querySelector(moveSelector);
    let appendElement = document.querySelector(appendSelector);
    appendElement.append(moveElement);
}


/* 
Q16. Write a function `filler` that accepts two parameters, 
the first is a list element that should be added to, 
the second is an array of strings that will be turned into list items
*/

function filler(listElement, strArray) {
    console.log(listElement);
    for (const str of strArray){
        const listItem = document.createElement('li');
        listItem.append(str);
        listElement.append(listItem);
    }
}

/* 
Q17. Write a function `dupe` that accepts one parameter, a selector. 
The function should duplicate the element chosen by the selector (and any children of it) inside its parent.
*/

function dupe(selector){
    const element = document.querySelectorAll(selector)
    console.log(element);
}