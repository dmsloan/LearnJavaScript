var ourList = document.getElementById("our-list");
var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);
}

function activateItem() {
    ourHeadline.innerHTML = this.innerHTML;
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
    ourList.innerHTML += "<li>Someting new</li>";
}