function get_calc(btn) {
  const operatorValue = ['+', '-', '×', '÷']
  const displayValueLastChar = document.calculator__form.display.value.slice(-1)
  if (btn.value == "=") {
    if (!operatorValue.includes(displayValueLastChar)) {
      document.calculator__form.display.value = document.calculator__form.display.value.replaceAll('×', '*')
      document.calculator__form.display.value = document.calculator__form.display.value.replaceAll('÷', '/')
      document.calculator__form.display.value = eval(document.calculator__form.display.value);
    }
  } else if (btn.value == "C") {
    document.calculator__form.display.value = "";
  } else {
    if (operatorValue.includes(displayValueLastChar) && operatorValue.includes(btn.value)) {
      document.calculator__form.display.value = document.calculator__form.display.value.replace(/.$/, btn.value)
    } else {
      document.calculator__form.display.value += btn.value;
    }
  }
}
