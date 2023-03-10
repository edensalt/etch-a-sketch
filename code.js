// define container

const container = document.querySelector('#container');

// define square

// run code to put squares into grid

// run this for each row and each column, so they are equal

for (let i = 0; i < 8; i++) {
    const row = document.createElement('div');
    container.appendChild(row);
    for (let i = 0; i < 8; i++) {
        console.log('add');
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
}