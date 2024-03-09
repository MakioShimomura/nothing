const OPERATORS = ['+', '-', '×', '÷']

function getCalc(btn) {
  const displayValueLastChar = document.calculator__form.display.value.slice(-1)
  if (btn.value == "=") {
    displayResult(displayValueLastChar)
  } else if (btn.value == "C") {
    document.calculator__form.display.value = '';
  } else {
    controlDisplay(displayValueLastChar, btn)
  }
}

const displayResult = (displayValueLastChar) => {
  if (document.calculator__form.display.value == '') {
    document.calculator__form.display.value = 0
  } else if (!OPERATORS.includes(displayValueLastChar)) {
    document.calculator__form.display.value = document.calculator__form.display.value.replaceAll('×', '*')
    document.calculator__form.display.value = document.calculator__form.display.value.replaceAll('÷', '/')
    document.calculator__form.display.value = eval(document.calculator__form.display.value);
  }
}

const controlDisplay = (displayValueLastChar, btn) => {
  if (OPERATORS.includes(displayValueLastChar) && OPERATORS.includes(btn.value)) {
    document.calculator__form.display.value = document.calculator__form.display.value.replace(/.$/, btn.value)
  } else {
    if (document.calculator__form.display.value.slice(0, 1) == '0') {
      document.calculator__form.display.value = document.calculator__form.display.value.replace(/^./, '')
    }
    document.calculator__form.display.value += btn.value;
  }
}
