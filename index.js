function get_calc(btn) {
  if (btn.value == "=") {
    if (/×/.test(document.calculator__form.display.value)) {
      document.calculator__form.display.value = document.calculator__form.display.value.replaceAll('×', '*')
    } else if (/÷/.test(document.calculator__form.display.value)) {
      document.calculator__form.display.value = document.calculator__form.display.value.replaceAll('÷', '/')
    }
    document.calculator__form.display.value = eval(document.calculator__form.display.value);
  } else if (btn.value == "C") {
    document.calculator__form.display.value = "";
  } else {
    document.calculator__form.display.value += btn.value;
    document.calculator__form.multi_btn.value = "×";
    document.calculator__form.div_btn.value = "÷";
  }
}
