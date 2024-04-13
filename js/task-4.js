const loginForm = document.querySelector('.login-form');

const handlerDataSubmit = event => {
  event.preventDefault();

  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  }

  const userData = {
    email: email.trim(),
    password: password.trim(),
  };

  console.log(userData);
  form.reset();
};

loginForm.addEventListener('submit', handlerDataSubmit);
