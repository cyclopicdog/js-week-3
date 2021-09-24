const greeting = () => {
  const name_element = document.querySelector("#username");
  const par = document.querySelector("#greet");
  const name = name_element.value;
  par.textContent = "Hello there, " + name;
  par.style.color = "white";
  par.style.backgroundColor = "red";
  par.className = "yoyo";
};
