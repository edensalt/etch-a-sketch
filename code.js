// define container

const container = document.querySelector('#container');

// choose how many squares are desired

const btnSquareNum = document.getElementById('square-btn');

let squares = 16;

btnSquareNum.addEventListener('click', () => {
    const inputSquareNum = document.getElementById('square-num');

    if (inputSquareNum.value > 100) {
        alert('Max 100 squres allowed! Try again.');

    } else if (inputSquareNum.value == 0) {
        alert('Your grid needs at least 1 square (though we think that would be boring...) Try again.');

    } else if (inputSquareNum.value < 0) {
    alert("Negative grids aren't a thing my friend. Try again.");

    } else {

        //Define new number of squares for the grid
        squares = parseInt(inputSquareNum.value);
        inputSquareNum.value = squares;

        // Remove old grid

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        };
        
        //Update grid
        for (let i = 0; i < squares; i++) {
            const row = document.createElement('div');
            container.appendChild(row);
        
            for (let i = 0; i < squares; i++) {
                const square = document.createElement('div');
                square.classList.add('square');
                row.appendChild(square);
            }
        }
    }
});

// make init grid

for (let i = 0; i < squares; i++) {
    const row = document.createElement('div');
    container.appendChild(row);

    for (let i = 0; i < squares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
}