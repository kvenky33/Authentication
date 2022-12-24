function signUp() {
  let name = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (name && email && password) {
    alert("successfully data submitted");
    document.getElementById("valid").style.display = "block";
    document.getElementById("valid").style.position = "absolute";

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  } else {
    alert("All feilds are manditory");
    document.getElementById("invalid").style.display = "block";
    document.getElementById("invalid").style.position = "absolute";
  }
  // localStorage.setItem("name", name);
  // localStorage.setItem("email", email);
  // localStorage.setItem("password", password);
}
