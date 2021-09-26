const departures = [
    {
        time: { hrs: 8, mins: 14 },
        train: 'Acela Express',
        no: 2153,
        to: 'Washington, DC',
        status: '',
        track: 2,
    },
    {
        time: { hrs: 8, mins: 19 },
        train: 'New Haven Line',
        no: 1541,
        to: 'Grand Central Terminal',
        status: 'On Time',
        track: 14,
    },
    {
        time: { hrs: 8, mins: 14 },
        train: 'Acela Express',
        no: 2153,
        to: 'Washington, DC',
        status: '',
        track: 2,
    },
    {
        time: { hrs: 8, mins: 19 },
        train: 'New Haven Line',
        no: 1541,
        to: 'Grand Central Terminal',
        status: 'On Time',
        track: 14,
    },
    {
        time: { hrs: 8, mins: 14 },
        train: 'Acela Express',
        no: 2153,
        to: 'Washington, DC',
        status: '',
        track: 2,
    },
    {
        time: { hrs: 8, mins: 19 },
        train: 'New Haven Line',
        no: 1541,
        to: 'Grand Central Terminal',
        status: 'On Time',
        track: 14,
    },
];

const timetableTimes = document.querySelector('.trains__table-body');

for (let i = 0; i < departures.length; i++) {
    // let time = Math.floor(departures[i] / 60) + ':' + departures[i] % 60;
    timetableTimes.innerHTML +=
        '<tr class="trains__times"><td>' +
        departures[i]['time']['hrs'] +
        ':' +
        departures[i]['time']['mins'] +
        '</td>' +
        '<td>' +
        departures[i]['train'] +
        '</td>' +
        '<td>' +
        departures[i]['no'] +
        '</td>' +
        '<td>' +
        departures[i]['to'] +
        '</td>' +
        '<td>' +
        departures[i]['status'] +
        '</td>' +
        '<td>' +
        departures[i]['track'] +
        '</td></tr>';
}

// **SHOPPING** //

// shopping list array
const shoppingList = [];
console.log(shoppingList);
// add something to the array

const addToList = (item, amount) => {
    let newItem = { item: item, amount: amount };
    shoppingList.push(newItem);
    console.log(shoppingList);
    buildTable();
};

// define the html elements

const submit = document.querySelector('.shopping__submit');
const tableBody = document.querySelector('.shopping__table-body');

// get the values
//  can't put the value here because it reads it as empty and doesn't update on button click

let bought;
const itemToBuy = document.querySelector('#item');
const amountToBuy = document.querySelector('#amount');

// get the items and amount

submit.addEventListener('click', () => {
    return addToList(itemToBuy.value, amountToBuy.value);
});

// make the table

const buildTable = () => {
    tableBody.innerHTML = '';
    for (let i = 0; i < shoppingList.length; i++) {
        let thing = shoppingList[i]['item']; // stop forgetting the quotes!!
        let howMany = shoppingList[i]['amount'];
        tableBody.innerHTML +=
            '<tr><td>' +
            thing +
            '</td><td>' +
            howMany +
            '</td><td><button class="bought" id="box_' +
            i +
            '">Been bought!</button></td></tr>';
    }
    bought = document.querySelectorAll('button.bought');
};

// remove from list

const removeItem = (index) => {
    shoppingList.splice(index, 1);
    console.log(index);

    buildTable();
    console.log(shoppingList);
};

addToList('bread', 2);
console.log(bought);
// find the thing to remove

bought.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        removeItem(index);
    });
});
