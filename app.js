//Selectors
const del = document.getElementById('del');
const clear = document.getElementById('clear');
const disp = document.getElementById('scr-disp');
const nine = document.getElementById('nine');
const eight = document.getElementById('eight');
const seven = document.getElementById('seven');
const six = document.getElementById('six');
const five = document.getElementById('five');
const four = document.getElementById('four');
const three = document.getElementById('three');
const two = document.getElementById('two');
const one = document.getElementById('one');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('multiplyy');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');

let dispArray = [0]; //saves current display value
let saveArray = [0]; //saves previous display values
let operation = ''; //saves name of operation
let result = 0; //saves result

//Clear Event Listeners 
//deletes one number from the end
del.addEventListener('click', function () {
    dispArray = disp.textContent.split('');
    if (dispArray.length == 1) {
        disp.textContent = 0;
    } else {
        dispArray.pop();
        disp.textContent = dispArray.join('');
    }
});

//resets the 4 variables operation, result, saveArray and dispArray
clear.addEventListener('click', function () {
    operation = '';
    result = 0;
    saveArray = 0;
    dispArray = [0];
    disp.textContent = dispArray.join('');
});

//Operation Event Listeners
//Add
plus.addEventListener('click', function () {
    operation = 'plus';
    if (result = '0') {
        result = Number(dispArray.join(''));
    } else {
        result += Number(dispArray.join(''));
    }
    dispArray = [0];
    disp.textContent = dispArray.join('');
})

//Minus
minus.addEventListener('click', function () {
    operation = 'minus';
    //if result initially zero, just assign. Dont compund assign. Same logic 
    //applies to the rest
    if (result = '0') {
        result = Number(dispArray.join(''));
    } else {
        result -= Number(dispArray.join(''));
    }
    dispArray = [0];
    disp.textContent = dispArray.join('');
})

//multiply
times.addEventListener('click', function () {
    operation = 'times';
    if (result = '0') {
        result = Number(dispArray.join(''));
    } else {
        result *= Number(dispArray.join(''));
    }
    dispArray = [0];
    disp.textContent = dispArray.join('');
})

//divide
divide.addEventListener('click', function () {
    operation = 'divide';
    if (result = '0') {
        result = Number(dispArray.join(''));
    } else {
        result /= Number(dispArray.join(''));
    }
    dispArray = [0];
    disp.textContent = dispArray.join('');
})

//Equals
equals.addEventListener('click', function () {
    let currentVal = 0;
    switch (operation) {
        case 'plus':
            currentVal = Number(disp.textContent);
            result += currentVal;
            dispArray = [result];
            disp.textContent = dispArray.join('');
            break;
        case 'minus':
            currentVal = Number(disp.textContent);
            result -= currentVal;
            dispArray = [result];
            disp.textContent = dispArray.join('');
            break;
        case 'times':
            currentVal = Number(disp.textContent);
            result *= currentVal;
            dispArray = [result];
            disp.textContent = dispArray.join('');
            break;
        case 'divide':
            currentVal = Number(disp.textContent);
            result /= currentVal;
            dispArray = [result];
            disp.textContent = dispArray.join('');
            break;
    }
});

//Numbers Event Listeners
//nine
nine.addEventListener('click', function () {
    if (disp.textContent === '0') {
        dispArray = [9];
        disp.textContent = dispArray.join('');
    } else {
        dispArray.push(9);
        disp.textContent = dispArray.join('');
    }

});

//eight
eight.addEventListener('click', function () {
    if (disp.textContent === '0') {
        dispArray = [8];
        disp.textContent = dispArray.join('');
    } else {
        dispArray.push(8);
        disp.textContent = dispArray.join('');
    }

});

//seven
seven.addEventListener('click', function () {
    if (disp.textContent === '0') {
        dispArray = [7];
        disp.textContent = dispArray.join('');
    } else {
        dispArray.push(7);
        disp.textContent = dispArray.join('');
    }

});

//six
six.addEventListener('click', function () {
    if (disp.textContent === '0') {
        dispArray = [6];
        disp.textContent = dispArray.join('');
    } else {
        dispArray.push(6);
        disp.textContent = dispArray.join('');
    }

});

//five
five.addEventListener('click', function () {
    if (disp.textContent === '0') {
        dispArray = [5];
        disp.textContent = dispArray.join('');
    } else {
        dispArray.push(5);
        disp.textContent = dispArray.join('');
    }

});

//four
four.addEventListener('click', function () {
    if (disp.textContent === '0') {
        dispArray = [4];
        disp.textContent = dispArray.join('');
    } else {
        dispArray.push(4);
        disp.textContent = dispArray.join('');
    }

});

//three
three.addEventListener('click', function () {
    if (disp.textContent === '0') {
        dispArray = [3];
        disp.textContent = dispArray.join('');
    } else {
        dispArray.push(3);
        disp.textContent = dispArray.join('');
    }

});

//two
two.addEventListener('click', function () {
    if (disp.textContent === '0') {
        dispArray = [2];
        disp.textContent = dispArray.join('');
    } else {
        dispArray.push(2);
        disp.textContent = dispArray.join('');
    }

});

//one
one.addEventListener('click', function () {
    if (disp.textContent === '0') {
        dispArray = [1];
        disp.textContent = dispArray.join('');
    } else {
        dispArray.push(1);
        disp.textContent = dispArray.join('');
    }

});

//zero
zero.addEventListener('click', function () {
    if (disp.textContent === '0') {
        dispArray = [0];
        disp.textContent = dispArray.join('');
    } else {
        dispArray.push(0);
        disp.textContent = dispArray.join('');
    }

});

//dot
dot.addEventListener('click', function () {
    if (disp.textContent === '0') {
        dispArray = ['0.'];
        disp.textContent = dispArray.join('');
    } else {
        dispArray.push('.');
        disp.textContent = dispArray.join('');
    }

});
