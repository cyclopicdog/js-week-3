const changeColor = () => {
  let color1 = document.querySelector('#first').value;
  let color2 = document.querySelector('#second').value;
  let color3 = document.querySelector('#third').value;
  let rbgColor;
  let background = document.querySelector('#wrapper');

  if (color1 > 255 || color2 > 255 || color3 > 255) {
    alert('I only take numbers from 0 to 255!');
  } else if (color1 < 0 || color2 < 0 || color3 < 0) {
    alert('I only take numbers from 0 to 255!');
  }

  rbgColor = "rgb(" + color1 + ", " + color2 + ", " + color3 + ")";
  console.log(rbgColor);
  background.style.backgroundColor = rbgColor;
  document.querySelector("#rgb").textContent = rbgColor;
};
