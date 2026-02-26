const outputEl = document.getElementById("output");

let text = "";

function render() {
  if (!text) {
    outputEl.innerHTML = '<span class="placeholder">Начните печатать…</span>';
  } else {
    outputEl.textContent = text;
  }
}

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "Backspace") {
    text = text.slice(0, -1);
    event.preventDefault();
    render();
    return;
  }

  if (key === "Enter") {
    text += "\n";
    render();
    return;
  }

  if (key.length !== 1) {
    return;
  }

  if (/[0-9]/.test(key)) {
    return;
  }

  if (/[a-zа-яё]/i.test(key)) {
    text += key.toUpperCase();
  } else {
    text += key;
  }

  render();
});

render();
