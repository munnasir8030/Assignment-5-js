const email = document.getElementById("email");
const password = document.getElementById("password");
const otpInput = document.getElementById("otpInput");
const LoginBtn = document.getElementById("LoginBtn");
const getBtn = document.getElementById("getBtn");
const inputtext = document.getElementById("inputtext");
const otp = document.getElementById("otp");

const input = {
  eml: "munnasir8030@gmail.com",
  pass: "123",
  otpnumber: 0,
};

LoginBtn.onclick = () => {
  const eml = email.value;
  const pass = password.value;
  const otp = Number(otpInput.value);

  if (eml == "" && pass == "" && otp == "") {
    inputtext.innerText = "Please Fill Up The Form";
    inputtext.style.color="red"
  } else {
    if (eml === input.eml && pass === input.pass && otp === otpnumber) {
      inputtext.innerText = "Correct";
      inputtext.style.color = "green";
      window.location.href = "loginpage.html";
    } else {
      inputtext.innerText = "Incorrect Information";
      inputtext.style.color = "red";
    }
  }
};
getBtn.onclick = () => {
  otpnumber = Math.floor(Math.random() * 10000);
  otp.innerText = otpnumber;
};






















