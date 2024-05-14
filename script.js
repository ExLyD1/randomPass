const input = document.querySelector('.inputField');
const gen = document.querySelector('.gen');
const del = document.querySelector('.del');
const len = document.querySelector('input')
let list = '`1234567890-=qwertyuiop[]asdfghjkl;zxcvbnm,./QWERTYUIOP{}ASDGHFJKL:"|ZXCVBNM<>?!@#$%^&*()_+';

try {
  gen.addEventListener('click', () => {
    input.textContent = '';
    let length = parseInt(document.querySelector('input').value);
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * list.length);
      input.textContent += list[randomIndex];
    }
  });

  del.addEventListener('click', () => {
    input.textContent = '';
    len.value = '';
  });
} catch (error) {
  console.error(error);
  input.textContent = 'Error';
  
}

