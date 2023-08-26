function onSubmit(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const statusElement = document.querySelector('.status');

    if (!fullName || !email || !password || !confirmPassword) {
        statusElement.style.color = "red";
        statusElement.innerHTML = "Error: All fields are mandatory";
    } else if (confirmPassword !== password) {
        statusElement.style.color = "red";
        statusElement.innerHTML = "Error: Passwords do not match";
    } else {
        statusElement.style.color = "green";
        statusElement.innerHTML = "Successfully Signed Up!";
        
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        
        document.getElementById('registerForm').reset();
    }
}


const fullName2 = document.getElementById('fullName2');
const email2 = document.getElementById('email2');
const password2 = document.getElementById('password2');

fullName2.innerHTML = "FullName: "+(localStorage.getItem("fullName")||"");
email2.innerHTML = "Email: "+(localStorage.getItem("email")||"");
password2.innerHTML = "Password: "+(localStorage.getItem("password")||"");

function onLogout(event) {
    localStorage.removeItem("fullName");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    location.href="/index.html"
}

if(location.href.includes("profile")&&!localStorage.getItem("fullName")){
    location.href="/index.html"
    alert("SignUp Please !")
}