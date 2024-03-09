const OPERATORS = ['+', '-', '×', '÷']
const PERFECT_NUMBERS = [6, 28, 496, 8128, 33550336, 8589869056, 137438691328, 2305843008139952128]

const displayResult = () => {
  let result = eval(document.calculator__form.display.value)
  if (document.calculator__form.display.value == '') {
    document.calculator__form.display.value = 0
  } else if (PERFECT_NUMBERS.includes(result)) {
    console.log(result)
    appearCalculator()
    document.calculator__form.display.value = result
  } else if (!OPERATORS.includes(document.calculator__form.display.value.slice(-1))) {
    console.log(result)
    document.calculator__form.display.value = document.calculator__form.display.value.replaceAll('×', '*')
    document.calculator__form.display.value = document.calculator__form.display.value.replaceAll('÷', '/')
    document.calculator__form.display.value = result
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
