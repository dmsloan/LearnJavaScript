var newItemCounter = 1
var ourList = document.getElementById("our-list");
var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");

// the following for list works on load but not when additional list items are added.
//for (let i = 0; i < listItems.length; i++) {
//    listItems[i].addEventListener("click", activateItem);
//}

ourList.addEventListener("click", activateItem);

function activateItem(e) {
    if (e.target.nodeName == "LI") {
        ourHeadline.innerHTML = e.target.innerHTML;
        for (let i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
    ourList.innerHTML += "<li>Someting new " + newItemCounter + "</li>";
    newItemCounter++;
}