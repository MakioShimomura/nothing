function get_calc(btn) {
  if (btn.value == "=") {
    document.calculator__form.display.value = eval(document.calculator__form.display.value);
  } else if (btn.value == "C") {
    document.calculator__form.display.value = "";
  } else {
    if (btn.value == "×") {
      btn.value = "*";
    } else if (btn.value == "÷") {
      btn.value = "/";
    }
    document.calculator__form.display.value += btn.value;
    document.calculator__form.multi_btn.value = "×";
    document.calculator__form.div_btn.value = "÷";
  }
}
