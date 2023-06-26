console.log(document);

const myMessage = document.querySelector('.myMessage');
const inputBox = document.querySelector('.theInputValue');
console.log(myMessage);

setTimeout(function(){
    myMessage.innerText = 'This is a message in the DOM!'
}, 3000);

const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
     }
    });

const theClearBtn = document.querySelector(".clearBtn");
theClearBtn.addEventListener("click", function() {
    myMessage.innerHTML = "";
});

setTimeout(function(){
    myMessage.innerText = '';
}, 6000);


myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

const fruitList = document.querySelector(".fruits");
const inp = document.querySelector(".inputValue");

for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}
 const addBtn = document.querySelector(".addBtn");
 addBtn.addEventListener("click", function(){
    const fruit = inp.value
    const li = document.createElement('li');
    li.innerHTML = fruit;
    fruitList.appendChild(li);
 })