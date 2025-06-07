const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            try {
                currentInput = currentInput
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/')
                    .replace(/%/g, '%')
                    .replace(/\^/g, '**');
                display.textContent = eval(currentInput);
                currentInput = display.textContent;
            } catch {
                display.textContent = 'Error';
                currentInput = '';
            }
        } else if (value === '⌫') {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || '0';
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
