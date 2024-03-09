const OPERATORS = ['+', '-', '×', '÷']

const displayResult = () => {
  if (document.calculator__form.display.value == '') {
    document.calculator__form.display.value = 0
  } else if (!OPERATORS.includes(document.calculator__form.display.value.slice(-1))) {
    document.calculator__form.display.value = document.calculator__form.display.value.replaceAll('×', '*')
    document.calculator__form.display.value = document.calculator__form.display.value.replaceAll('÷', '/')
    document.calculator__form.display.value = eval(document.calculator__form.display.value);
  }
}

const controlDisplay = (btn) => {
  if (OPERATORS.includes(document.calculator__form.display.value.slice(-1)) && OPERATORS.includes(btn.value)) {
    document.calculator__form.display.value = document.calculator__form.display.value.replace(/.$/, btn.value)
  } else {
    if (document.calculator__form.display.value.slice(0, 1) == '0') {
      document.calculator__form.display.value = document.calculator__form.display.value.replace(/^./, '')
    }
    document.calculator__form.display.value += btn.value;
  }
}

const clearDisplay = () => {
  document.calculator__form.display.value = '';
}
