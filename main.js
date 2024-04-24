console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById('node1');
node1.textContent = "I used the getElementById('node1') method to access this.";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName('node2')[0];
node2.textContent = "I used the getElementByClassName('node2') method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3s = document.getElementsByTagName("h3");
for(let elements of h3s){
    elements.textContent = "I used the getElementsByTagName('h3') method to access all of these"
};


/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let paragraph = document.createElement("p");
paragraph.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method

let parent = document.querySelector('#parent');
parent.appendChild(paragraph);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

let aElem = document.createElement("a"); 
aElem.textContent = "I am an <a> tag.";

// BONUS: Add a link href to the <a>

aElem.href = "https://google.com";
aElem.target = "_blank"   //opens link in a new tab

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

parent.insertBefore(aElem, paragraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

let exercise3 = document.querySelector("#exercise-container3");
let oldChild = document.querySelector("#N1");

let newChild = document.createElement("p");
newChild.textContent = "New child that replaces the old child.";

exercise3.replaceChild(newChild, oldChild);


// TODO: Remove the "New Child Node"

setTimeout(() =>{
exercise3.removeChild(newChild)
},3000)


/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

// TODO: Create an unordered list element

let ul = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each

list.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;

// TODO: Append the new list items to the unordered list element
    ul.appendChild(li);
})

// TODO: Append the unordered list to the `div#container` under exercise 4 
document.querySelector("#container").appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message


function show(){
let modalContainer = document.createElement("div");
let modalCard = document.createElement("div");
let h2 = document.createElement("h2");
let p = document.createElement("p");
let closeBtn = document.createElement("button");

//add content to the modal 
h2.textContent = "Modal Header";
p.textContent = "Content of the modal";
closeBtn.textContent = "X";

//add event listner to closeBtn that removes modal container from modal body
closeBtn.addEventListener("click", () =>{
    document.body.removeChild(modalContainer);
});

modalCard.append(h2, p, closeBtn);
modalCard.classList.add("modal-card");

//add the modalCard to the modal
modalContainer.id = "modal";
modalContainer.appendChild(modalCard);

//add the modal to the body

document.body.appendChild(modalContainer);
}

let button = document.querySelector('#btn');
button.addEventListener("click", show);


// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

