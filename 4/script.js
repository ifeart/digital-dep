let tableElements = Array.from(document.getElementsByClassName("tbl-el"));

tableElements.forEach(element => {
    let textTableElement = element.textContent;
    if (textTableElement == "M3" || textTableElement == "15") {
        element.classList.add("green-light")
    }
});

Array.from(document.getElementsByClassName("tbl-price")).forEach(element => {
    element.textContent += " ₽";
})