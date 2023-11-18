document.addEventListener('DOMContentLoaded', function () {

    const display = document.querySelector('.text');
    const buttons = document.querySelectorAll('.button');

    let currentInput = '';

    buttons.forEach(function (button) {

        button.addEventListener('click', function () {

            const buttonText = button.innerText;

            if (buttonText === 'AC') {

                currentInput = '';

            } else if (buttonText === '=') {

                try {

                    const evalInput = currentInput.replace(/x/g, '*');

                    currentInput = eval(evalInput);

                } catch (error) {

                    currentInput = 'Error';

                }
            } else {
                
                currentInput += (buttonText === 'x') ? 'x' : buttonText;
            }

            display.innerText = currentInput;
        });
    });
});
