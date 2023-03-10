// define container

const container = document.querySelector('#container');

// choose how many squares are desired

const btnSquareNum = document.getElementById('square-btn');

btnSquareNum.addEventListener('click', () => {
    const inputSquareNum = document.getElementById('square-num');

    if (inputSquareNum.value > 100) {
        alert('Max 100 squres allowed! Try again.');
    } else {
        const squares = inputSquareNum.value;
        console.log(squares);
        inputSquareNum.value = '';
    }
});

// make a grid



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