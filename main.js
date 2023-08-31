let email = document.getElementById("email");
let subscribeButton = document.querySelector(".btn-subscribe button");
let dashboardCard = document.querySelector("div.card");
let successPageCard = document.querySelector("div.card-success");
let emailSpan = document.querySelector("div.card-success strong");

subscribeButton.onclick = function (e) {
  console.log(subscribeButton.innerHTML);
  const emailValue = email.value.trim();
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setEmail(emailValue);
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

const setEmail = (email) => {
  dashboardCard.style.display = "none";
  successPageCard.style.display = "grid";
  emailSpan.innerHTML = email;
};
