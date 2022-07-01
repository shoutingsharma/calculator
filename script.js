var screen = document.getElementById('screen');
 var buttons = document.querySelectorAll('button');
var screenValue = '';
for (var i=0;i<buttons.length;i++) {
    buttons[i].addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'ON/OFF') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            // console.log(typeof screenValue);
            // screenValue = screenValue.slice(0, (screenValue.length - 1));
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}