// define container and get its style

const container = document.querySelector('#container');
const containerStyle = window.getComputedStyle(container);
const containerHeight = containerStyle.getPropertyValue('height');
const containerWidth = containerStyle.getPropertyValue('width');

let squares = 16;

// make init grid

const originalArray = [];

for (let i = 0; i < squares; i++) { // push into array??
    const row = document.createElement('div');
    row.id = `row ${i}`;
    row.style.height = `${(600 / squares)}px`; // maybe to get the value, you need to remove the last 2 letters in the string
    row.style.width = '600px';
    container.appendChild(row);

    for (let i = 0; i < squares; i++) {
        const square = document.createElement('div');
        square.id = `square ${i}`;
        square.style.height = `${(600 / squares)}px`;
        square.style.width = `${(600 / squares)}px`;
        square.classList.add('square');
        row.appendChild(square);
        originalArray.push(square);
    }

}

// Update size of grid based on submitted number

const btnSquareNum = document.getElementById('square-btn');

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

        // Remove old grid and reset array
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        };

        //Set new array for draw feature
        newArray = [];

        //Update grid
        for (let i = 0; i < squares; i++) {
            const row = document.createElement('div');
            row.style.height = `${(600 / squares)}px`; // maybe to get the value, you need to remove the last 2 letters in the string
            row.style.width = '600px';
            container.appendChild(row);
        
            for (let i = 0; i < squares; i++) {
                const square = document.createElement('div');
                square.style.height = `${(600 / squares)}px`;
                square.style.width = `${(600 / squares)}px`;
                square.classList.add('square');
                row.appendChild(square);
                newArray.push(square);
            }
        }
    }

    for (let i = 0; i < newArray.length; i++) {
        newArray[i].addEventListener("mouseover", function() {
            this.style.backgroundColor = "black";
        });
    }

});

// Change color to black when hovering
for (let i = 0; i < originalArray.length; i++) {
    originalArray[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "black";
    });
}