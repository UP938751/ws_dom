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

//Q14
function reverseList(selector) {
    const list = document.querySelector(selector)
    let reverseList = [];
    for(const item of list.children){
        reverseList.push(item.innerHTML);
    }
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    } 
    reverseList = reverseList.reverse()
    reverseList.forEach(element => {
        const li = document.createElement("li");
        li.innerHTML = element;
        list.appendChild(li);
    });
    return list
}

//Q15
function mover(moveSelector, appendSelector) {
    const moveElement = document.querySelector(moveSelector);
    const appendElement = document.querySelector(appendSelector);
    appendElement.appendChild(moveElement);
}

//Q16
function filler(liElement, strArray){
    strArray.forEach(str => {
        const item = document.createElement('li');
        item.innerHTML = str
        liElement.appendChild(item)
    })
}
//Q17
function dupe(selector) {
    const element = document.querySelector(selector);
    //element.parentNode.append(element) //- Doesn't work?
    element.parentNode.append(element.cloneNode(true));
}

//Q18
function removeAll(selector) {
    const nodes = document.querySelectorAll(selector);
    nodes.forEach(node => node.remove()); //nodelist has foreach method
}

//Q19
function getUserData() {
    const username = document.querySelector('#username').value
    const speed = parseInt(document.querySelector('#speed').value)
    const isStudent = document.querySelector('#student').checked
    const data = 
    {"name": username,
     "speed": speed,
     "student": isStudent
    }
    return data;

}