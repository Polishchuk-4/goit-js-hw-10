import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('form');
let inputTimeDelay;

form.addEventListener('submit', event => {
  event.preventDefault();
  const selectedState = document.querySelector(
    'input[name="state"]:checked'
  ).value;
  inputTimeDelay = document.querySelector('input[name="delay"]');
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedState === 'fulfilled') {
        resolve(inputTimeDelay.value);
      } else {
        reject(inputTimeDelay.value);
      }
    }, +inputTimeDelay.value);
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
