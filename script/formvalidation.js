const myForm = document.getElementById('myForm');
const Name = document.getElementById('Name');
const Email = document.getElementById('Email');
const Phone = document.getElementById('Phone');
myForm.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}
const setSuccess = element => {
  document.getElementById("form-popup").style.display = "none";
  swal({
    title: "Congratulations!!!!",
    text: "You are Gain 10% off your first order",
    icon: "success",
    button: "Ok",
    timer: 3000
  })
  setTimeout(function() {
    location.reload(true);
  }, 2000);
  // location.reload(true);
  //           tr.hide();
  // localeStorage.clear();
};
const isValidEmail = Email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(Email).toLowerCase());
}
// const telephoneCheck = Phone => {
//   const re = /^\d{10}$/;
//   return re.test(Phone);
// }

const validateInputs = () => {
  const usernameValue = Name.value.trim();
  const emailValue = Email.value.trim();
  const phoneNumber = Phone.value.trim();

  if(usernameValue === '') {
      setError(Name, 'Name is required');
  } else {
      setSuccess(Name);
  }

  if(emailValue === '') {
      setError(Email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
      setError(Email, 'Provide a valid email address');
  } else {
      setSuccess(Email);
  }
  if(phoneNumber === '') {
      setError(Phone, 'Phone is required');
  } else {
      setSuccess(Phone);
  }

};

