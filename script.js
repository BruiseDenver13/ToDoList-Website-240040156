const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const errorMsg = document.getElementById("error-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = input.value.trim();

    if (text === "") {
        errorMsg.textContent = "Tugas tidak boleh kosong!";
        return;
    }

    errorMsg.textContent = ""; 

    const li = document.createElement("li");
    li.classList.add("todo-item");

    const spanText = document.createElement("span");
    spanText.classList.add("todo-text");
    spanText.textContent = text;

    const actions = document.createElement("div");
    actions.classList.add("todo-actions");

    const btnComplete = document.createElement("button");
    btnComplete.textContent = "Selesai";
    btnComplete.classList.add("btn-complete");

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Hapus";
    btnDelete.classList.add("btn-delete");

    actions.appendChild(btnComplete);
    actions.appendChild(btnDelete);

    li.appendChild(spanText);
    li.appendChild(actions);

    list.appendChild(li);

    input.value = "";
});