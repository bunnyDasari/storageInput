let saveButton = document.getElementById("saveButton");
let textAreaEl = document.getElementById("message");

saveButton.onclick = function() {
    let userEnteredText = textAreaEl.value;
    local.setItem("userEnteredText", userEnteredText);
}

let storedUserInputValue = localStorage.getItem("userEnteredText");
if(storedUserInputValue === "null"){
    textAreaEl.value = "";
}else{
    textAreaEl.value = storedUserInputValue;
}