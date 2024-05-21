import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
const buttonStart = document.querySelector('[data-start]');
const inputDateTime = document.querySelector('#datetime-picker');
const outputDate = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0].getTime();
    if (userSelectedDate - Date.now() < 0) {
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
        close: false,
        progressBar: false,
        timeout: 2000,
      });
      return;
    }
    buttonStart.disabled = false;
    buttonStart.classList.add('button-active');
  },
};

flatpickr('#datetime-picker', options);

buttonStart.addEventListener('click', event => {
  buttonStart.classList.remove('button-active');

  startTimer();
});

function startTimer() {
  inputDateTime.disabled = true;
  buttonStart.disabled = true;

  const intervalId = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(
      userSelectedDate - Date.now()
    );

    if (userSelectedDate < Date.now() + 1000) {
      inputDateTime.disabled = false;
      clearInterval(intervalId);
    }

    outputDate.days.textContent = addLeadingZero(days);
    outputDate.hours.textContent = addLeadingZero(hours);
    outputDate.minutes.textContent = addLeadingZero(minutes);
    outputDate.seconds.textContent = addLeadingZero(seconds);
  }, 1000);
}
function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
