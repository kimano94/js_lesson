function NewTable() {
  let UI = document.getElementsByTagName("button");
  for (let UIElem of UI) {
    console.log(UIElem.hidden);
    if (UIElem.hidden != 1) {
      UIElem.hidden = 1;
      console.log(UIElem.hidden);
    } else if (UIElem.hidden != 0) {
      UIElem.hidden = 0;
      console.log(UIElem.hidden);
    }
  }
}
