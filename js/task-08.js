const formRef = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();

  const { email, password } = formRef.elements;

  if (!email.value || !password.value) {
    alert("Warning! You must complete all fields.");
    return;
  }

  const userData = {
    email: email.value,
    password: password.value,
  };

  console.log(userData);
  // console.log(`Email: ${userData.email} Password: ${userData.password}`);
  formRef.reset();
};

formRef.addEventListener("submit", onFormSubmit);
