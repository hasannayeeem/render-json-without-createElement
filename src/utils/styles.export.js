import getClass from "./getClasses";
import getRawCss from "./getRawCss";
const styles = document.getElementById("style.import");

function exportStyle(data) {
  data.forEach((item) => {
    const selector = getClass(item);
    const style = item.style
      ? getRawCss(item.style)
      : getRawCss(item.form.style);

    styles.appendChild(document.createTextNode(`.${selector}{${style}}`));
    if (Array.isArray(item.content)) {
      return exportStyle(item.content);
    }

    if (item.form) {
      let selector = getClass(item.form.submitButton);
      const style = getRawCss(item.form.submitButton.style);
      styles.appendChild(document.createTextNode(`.${selector}{${style}}`));

      item.form.fields.items.forEach((field) => {
        selector = getClass(field);
        const style = getRawCss(item.form.fields.style);
        styles.appendChild(document.createTextNode(`.${selector}{${style}}`));
      });
    }
  });
}

export default exportStyle;
