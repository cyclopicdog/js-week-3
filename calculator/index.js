const add = () => {
  let total = Number(document.querySelector('#result').innerHTML);
  let addNum = Number(document.querySelector('#number').value);
  let result = addNum + total;

  // total += result;
  // console.log(total);

  document.querySelector('#result').textContent = result;
  document.querySelector('#number').value = null;
}
