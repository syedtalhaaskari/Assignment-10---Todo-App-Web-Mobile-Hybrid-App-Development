var list = document.getElementById("list");

function verify() {
    var item = document.getElementById("todoItem").value;
    if (item === "") {
        alert("Enter Some Todo Item");
    }
    else {
        addItem();
    }
}

function addItem() {
    // creating li element
    var item = document.getElementById("todoItem");
    var li = document.createElement("li");

    // input
    var input = document.createElement("input");
    input.setAttribute("value", item.value);
    input.setAttribute("readonly", "true");
    input.setAttribute("class", "input")
    input.setAttribute("maxlength", "25")
    li.appendChild(input);

    // Edit Button
    var editBtn = document.createElement("button");
    textNode = document.createTextNode("Edit");
    editBtn.appendChild(textNode);
    editBtn.setAttribute("onclick", "editItem(this)");
    li.appendChild(editBtn);

    // Delete Button
    var dltBtn = document.createElement("button");
    textNode = document.createTextNode("Delete");
    dltBtn.appendChild(textNode);
    dltBtn.setAttribute("onclick", "deleteItem(this)");
    li.appendChild(dltBtn);

    item.value = "";
    list.appendChild(li);
}

function editItem(e) {
    var input = e.parentNode.childNodes[0];
    input.readOnly = false;
    var updateButton = input.nextSibling;
    updateButton.innerHTML = "Update";
    updateButton.setAttribute("onclick", "update(this)");
    e.parentNode.childNodes[0].focus();
}

function update(e) {
    if (e.parentNode.firstChild.value === "")
    {
        alert("Enter Some Todo Item");
    }
    else {
        e.innerHTML = "Edit";
        e.setAttribute("onclick", "editItem(this)");
        e.parentNode.childNodes[0].readOnly = true;
    }
}

function deleteItem(e) {
    e.parentNode.remove();
}

function deleteAll() {
    list.innerHTML = "";
}