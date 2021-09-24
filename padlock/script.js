// get the stuff
const text = document.querySelector('#text');
const padlock = document.querySelector('.locked__padlock')
console.log(padlock)

let clicked = false;

// when locked

const lock = () => {
  text.style.display = 'block';
  padlock.style.opacity = '0.5';
  clicked = true;
}

// when unlocked

const unlock = () => {
  text.style.display = 'none';
  padlock.style.opacity = '1';
  clicked = false;
}

// to lock

padlock.addEventListener('click', () => {
  if (clicked === false) {
    lock();
  } else {
    unlock();
  }
})

// to get the hover & show the text

padlock.addEventListener('mouseover', () => {
  if (clicked === false) {
    text.style.display = 'block';
  }
})

// hide the text
padlock.addEventListener('mouseleave', () => {
  if (clicked === false) {
    text.style.display = 'none';
  }
})




