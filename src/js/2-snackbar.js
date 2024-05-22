import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('form');
let inputTimeDelay = document.querySelector('input[name="delay"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  const selectedState = document.querySelector(
    'input[name="state"]:checked'
  ).value;
  const promise = new Promise((resolve, reject) => {
    const inputTimeDelayValue = +inputTimeDelay.value;
    setTimeout(() => {
      if (selectedState === 'fulfilled') {
        resolve(inputTimeDelayValue);
      } else {
        reject(inputTimeDelayValue);
      }
    }, inputTimeDelayValue);
  });
  promise
    .then(value => {
      iziToast.success({
        message: `Fulfilled promise in ${value}ms`,
        position: 'topRight',
        close: false,
        progressBar: false,
        timeout: 2000,
      });
      console.log(value);
    })
    .catch(error => {
      iziToast.error({
        message: `Rejected promise in ${error}ms`,
        position: 'topRight',
        close: false,
        progressBar: false,
        timeout: 2000,
      });
      console.log(error);
    });
});
