const user = document.querySelector("#user");
const password = document.querySelector("#password");

const checkpass = () => {
  if (password.value === "fuck you") {
    alert("That's right - you're in!");
  } else {
    alert("No you fuck-wit - get it right!");
  }
};
