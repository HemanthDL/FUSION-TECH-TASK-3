function formSubmitHandler(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(email+" "+password);
    

    const emailRegex = /[!#$%^&*(),?":{}|<>]/;

    if (emailRegex.test(email)&&!email.includes("@")&&!email.includes(".")) {
        alert("Invalid email address");
        window.location.href = "login.html";
    }

    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    
    const numberRegex = /[0-9]/;
    const alphabetRegex = /[a-zA-Z\s]/;

    if(password <4 || password > 20){
        alert("Password Length must be in the range 4 - 20");
        window.location.href = "login.html";
    }
    if (!uppercaseRegex.test(password)&&!specialCharRegex.test(password)&&!alphabetRegex.test(password)&&!numberRegex.test(password)) {
        alert("Password must including one uppercase letter, one special character, and alphanumeric characters");
        window.location.href = "login.html";
    }

    window.location.href = "index.html";

}