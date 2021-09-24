//Unfinished ===> check github

// Step 1 - How do we want to use it?

// pretty_checkbox('.pretty-checkbox');

// Step 2 - What do we need to make it re-usable? (selector)

const pretty_checkbox = (selector) => {
  //gets the container
  const container = document.querySelector(selector);
  //gets the checkbox in the container
  const checkbox = container.querySelector('input[type="checkbox"]');

  //make the container disappear
  checkbox.style.display = 'none';

  //finds the __widget element
  const widget = container.querySelector('.pretty-checkbox__widget');

  //when the widget is clicked, add the class .pretty-checkbox--on to the container (this is already done in the css!)
  widget.addEventListener('click', () => {
    // this toggle shit is useful - remember it
    container.classList.toggle('pretty-checkbox--on');
    if (container.classList.contains('pretty-checkbox--on')) {
      checkbox.checked = true;

    } else {
      checkbox.checked = false;
    }
  })

}

