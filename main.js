const form = document.getElementById("form");
const email = document.getElementById("email");

const validateInputs = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
    return false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
    return false;
  } else {
    return true;
  }
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const isValidEmail = (email) => {
  const emailRegex = new RegExp(
    /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/gm
  );
  return emailRegex.test(email);
};
