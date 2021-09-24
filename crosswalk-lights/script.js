

const lightsActive = (lightSet) => {
  //get the elements
  const lights = document.querySelector(lightSet);
  const dontCross = document.querySelector('#dontWalk');
  const crossNow = document.querySelector('#walk');
  const button = document.querySelector('.lights__button');

  // change the lights

  const change = () => {


    dontCross.classList.remove('lights__dont-walk-light');
    dontCross.classList.add('lights__dont-walk-light--off');
    crossNow.classList.remove('lights__walk-light');
    crossNow.classList.add('lights__walk-light--on');
    // !!! Why didn't you just set the class name????? DUH!
  }

  // find out somebody is waiting

  const wantToCross = () => {
    button.addEventListener('click', () => {
      change();
      setTimeout(() => {
        return resetLights();
      }, 5000);
    })
  }


  // change the lights back

  const resetLights = () => {
    dontCross.classList.remove('lights__dont-walk-light--off');
    dontCross.classList.add('lights__dont-walk-light');
    crossNow.classList.remove('lights__walk-light--on');
    crossNow.classList.add('lights__walk-light');
  };

  //start the thing
  wantToCross();
}

lightsActive('.lights');
