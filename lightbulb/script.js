let off = true;

const change = () => {
  let light = document.querySelector("#bulb");
  if (off === true) {
    light.className = "light__on";
    off = false;
  } else {
    light.className = "light__off";
    off = true;
  }
};
