import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayInput = document.querySelector('[name="delay"]');
const stateInputs = document.querySelectorAll('[name="state"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = parseInt(delayInput.value);
  let isFulfilled = false;

  stateInputs.forEach(input => {
    if (input.checked && input.value === 'fulfilled') {
      isFulfilled = true;
    }
  });

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFulfilled) {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(value => {
      iziToast.success({
        title: 'Ok',
        message: value,
        backgroundColor: '#59a10d',
        titleColor: '#ffffff',
        messageColor: '#ffffff',
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error,
        backgroundColor: '#ef4040',
        titleColor: '#ffffff',
        messageColor: '#ffffff',
      });
    });
});
