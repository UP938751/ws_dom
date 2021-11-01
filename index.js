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
