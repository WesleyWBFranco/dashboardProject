const foodList = document.querySelector(".foodList");
const addItem = document.querySelector(".addItem");
const addList = document.querySelector(".addList");

addItem.addEventListener("click", function(){
    const newItem = document.createElement("LI");
    const itemContent = document.createTextNode(addList.value);
    newItem.appendChild(itemContent);
    foodList.appendChild(newItem);
})