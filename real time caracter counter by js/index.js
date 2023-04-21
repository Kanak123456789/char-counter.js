const textareaEl = document.getElementById("textarea")
const totalCounterE1 = document.getElementById("total-counter")
const remainingCounterEl = document.getElementById("remaining-counter")

function updateCounter() {
    totalCounterE1.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
textareaEl.addEventListener("keyup", () => {
    updateCounter();

});
updateCounter()

 