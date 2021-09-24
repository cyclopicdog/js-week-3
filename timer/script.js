const timer = () => {

  // set everything

  const done = document.querySelector('#done');
  const btn = document.querySelector('#start');

  countdown.style.display = 'none';
  done.style.display = 'none';


  // start the timer - it's all inside, not good?

  btn.addEventListener('click', () => {
    done.style.display = 'none';
    let count = 0;

    //get the input and set the time
    const minutes = Number(document.querySelector('#minutes').value);
    const seconds = Number(document.querySelector('#seconds').value);
    let countdown = document.querySelector('#countdown');


    // limit seconds
    if (seconds > 59) {
      alert('There are only 60 seconds in a minute dum dum!');
    }

    // stop negative numbers
    if (seconds < 0 || minutes < 0) {
      alert('I\'m a countdown not a count up dum dum!');
    }


    // make sure inputs can be counted

    if (minutes === null) {
      minutes = 0;
    }
    if (seconds === null) {
      seconds = 0;
    }


    // find total time in seconds
    count = (minutes * 60) + seconds;

    // display minutes and seconds
    const countdownText = (count) => {
      let display;
      let minutes = Math.floor(count / 60);
      let seconds = count - (minutes * 60);
      console.log('seconds:' + seconds)
      display = minutes + ':' + String(seconds).padStart(2, 0);
      countdown.textContent = display;
    }
    countdown.style.display = 'block';
    countdownText(count);


    // countdown

    const countingDown = (count) => {

      if (count >= 1) { // it needs to be 1 because it waits a second after each run!
        setTimeout(() => {
          count--; // the last loop makes it 0 then it waits another second!
          countdownText(count);
          console.log(count);
          countingDown(count);
        }, 1000);
      } else {
        // end countdown
        done.style.display = 'block';
        countdown.style.display = 'none';
      }
    }

    // start counting

    countingDown(count);

  });
}


timer();
