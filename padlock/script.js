// you should be setting the css styles in css and only changing the class here in the javaScript


// get the stuff
const text = document.querySelector('#text');
const padlock = document.querySelector('.locked__padlock')
console.log(padlock)

let clicked = false;

// when locked

const lock = () => {
  text.className = 'locked__text--visible';
  padlock.className = 'locked__padlock--clicked';

  //  text.style.display = 'block';
  //  padlock.style.opacity = '0.5';
  clicked = true;
}

// when unlocked

const unlock = () => {
  text.className = 'locked__text';
  padlock.className = 'locked__padlock';
  //  text.style.display = 'none';
  //  padlock.style.opacity = '1';
  clicked = false;
}

// to lock

padlock.addEventListener('click', () => {
  if (!clicked) {
    lock();
  } else {
    unlock();
  }
})

// to get the hover & show the text

padlock.addEventListener('mouseover', () => {
  if (clicked === false) {
    text.className = 'locked__text--visible';
    //  text.style.display = 'block';
  }
})

// hide the text
padlock.addEventListener('mouseleave', () => {
  if (clicked === false) {
    text.className = 'locked__text';
    //  text.style.display = 'none';
  }
})




