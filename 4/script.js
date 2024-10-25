let oldTableElements = Array.from(document.getElementsByClassName("tbl-el"));
let formAddMac = document.getElementById("form-add-mac");

getColorFocus(oldTableElements);

getGoodPriceFormat(Array.from(document.getElementsByClassName("tbl-price")));

function getGoodPriceFormat(priceElements) {
    Array.from(priceElements).forEach(element => {
        element.textContent = parseInt(element.textContent).toLocaleString() + " ₽";
    });
}

formAddMac.addEventListener('submit', (event) => {
    event.preventDefault();
    let tableLineClassList = ['tbl-a', '', 'tbl-price', 'tbl-size', 'tbl-cpu', 'tbl-ram', 'tbl-color', 'tbl-layout'];
    let listInfoFromAddMac = Array.from(document.getElementById('form-add-mac'));
    let newRowMac = document.createElement('tr');
    newRowMac.classList.add('table-line');
    
    newRowMac.appendChild(getNewLinkTd(listInfoFromAddMac[0].value, listInfoFromAddMac[1].value));
    listInfoFromAddMac[2].value = parseInt(listInfoFromAddMac[2].value).toLocaleString() + " ₽";

    for (let i = 2; i < 8; i++) {
        let newElement = document.createElement('td');
        newElement.classList.add('tbl-el', tableLineClassList[i]);
        newElement.textContent = listInfoFromAddMac[i].value;
        newRowMac.appendChild(newElement);
    }

    getColorFocus(Array.from(newRowMac.getElementsByClassName("tbl-el")));
    document.getElementById('table-mac-body').appendChild(newRowMac);
    
    listInfoFromAddMac.forEach((element) => {
    if (element.type !== 'submit') {
        element.value = '';
    }
    });
});

function getNewLinkTd(link, text) {
    let newLink = document.createElement('a');
    newLink.target = '_blank';
    newLink.href = link;
    newLink.textContent = text;

    let newTd = document.createElement('td');
    newTd.classList.add('tbl-el', 'tbl-a');
    newTd.appendChild(newLink);
    return newTd;
}

function getColorFocus(tableElements) {
    let goodElements = ['M3', '15'];
    tableElements.forEach(element => {
        if (goodElements.includes(element.textContent)) {
            element.classList.add("green-light");
        }
    });
}

let slvInputToTable = {1: 'tbl-a', 2: 'tbl-a', 3: 'tbl-price', 4: 'tbl-size', 5: 'tbl-cpu', 6: 'tbl-ram', 7: 'tbl-color', 8: 'tbl-layout'}; 
let allTableElments = Array.from(document.getElementsByClassName('inpt-amc'));
allTableElments.forEach(element => {
    element.addEventListener('focus', (focusedElement) => {
        Array.from(document.getElementsByClassName(slvInputToTable[allTableElments.indexOf(focusedElement.target) + 1])).forEach(elementToLightBlue => {
            elementToLightBlue.classList.add('blue-light', 'bold-text');
        });
    });

    element.addEventListener('blur', (blurredElement) => {
        Array.from(document.getElementsByClassName(slvInputToTable[allTableElments.indexOf(blurredElement.target) + 1])).forEach(elementToDefault => {
            elementToDefault.classList.remove('blue-light', 'bold-text');
        });
    });
});