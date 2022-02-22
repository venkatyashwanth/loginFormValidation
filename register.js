let newName = document.getElementById("getNewUser");
let newEmail = document.getElementById("getNewEmail");
let setPassword = document.getElementById('setPassword');
let confirmPassword = document.getElementById('conPassword');


function callName(name) {
    let regExp = new RegExp("^[A-Za-z]*$");
    let nameError = document.getElementById('nameError');
    if (name == '') {
        nameError.textContent = "this field is required";
        return false;
    }
    else if (regExp.test(name) == false) {
        nameError.textContent = "name should have only alphabets";
        return false;
    }
    else {
        nameError.textContent = '';
        return true;
    }
}

function callEmail(email) {
    let emailError = document.getElementById('emailError');
    emailError.textContent = "";
    let ss = email.substring(email.indexOf('@') + 1);
    if (email == '') {
        emailError.textContent = "this field is required";
        return false;
    }
    else if (!email.includes('@') || ss == '') {
        emailError.textContent = "Please put valid email id";
        return false;
    }
    else {
        return true;
    }
}


function callPassword(password) {
    let passError = document.getElementById('passError');
    passError.innerHTML = "";
    let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

    if (password == '') {
        passError.textContent = "this field is required";
        return false;
    }
    else if (regExp.test(password) == false) {
        // let spanNode=document.createElement("span");
        passError.textContent = "the password should contain atleast one";
        let ulnode = document.createElement("ul");
        let linode1 = document.createElement("li");
        linode1.textContent = "Capital letter";
        let linode2 = document.createElement("li");
        linode2.textContent = "Small Letter";
        let linode3 = document.createElement("li");
        linode3.textContent = "Digit";
        let linode4 = document.createElement("li");
        linode4.textContent = "Special Symbol";
        ulnode.append(linode1, linode2, linode3, linode4);
        passError.append(ulnode);
        return false;
    }
    else if (password.length < 8 || password.length > 24) {
        passError.textContent = "Password should be atleast 5 and atmost 12 characters long";
        return false;
    }
    else {
        return true;
    }
    //(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}
}

function checkPassword(password, cpassword) {
    let cpassError = document.getElementById('cpassError');
    cpassError.textContent = "";
    if (cpassword == '') {
        cpassError.textContent = "this field is required";
        return false;
    }
    else if (cpassword !== password) {
        cpassError.textContent = "Password not matching";
        return false;
    }
    else {
        return true;
    }
}

function createUser() {
    const name = newName.value;
    const email = newEmail.value;
    const password = setPassword.value;
    const cpassword = confirmPassword.value;

    let getName = callName(name);
    let getEmail = callEmail(email);
    let getPassword = callPassword(password)

    if (getName && getEmail && getPassword) {
        let evalPassword = checkPassword(password, cpassword);
        if (evalPassword) {
            let details = {
                NAME: name,
                EMAIL: email,
                PASSWORD: password
            }
            let localValues = JSON.parse(localStorage.getItem('USERDETAILS'));
            if (localValues == null) {
                detailArray = [];
                detailArray.push(details);
                let jsonData = JSON.stringify(detailArray);
                localStorage.setItem('USERDETAILS', jsonData);
                alert('Details Registered');
            } else {
                detailArray = localValues;
                let checkName = details.NAME;
                let checkArray = detailArray.filter(val => val.NAME == checkName)
                if (checkArray.length === 0) {
                    nameError.textContent = ''
                    detailArray.push(details);
                    let jsonData = JSON.stringify(detailArray);
                    localStorage.setItem('USERDETAILS', jsonData);
                    alert('Details Registered');
                }
                else {
                    nameError.textContent = 'Already Exists'
                }
            }
        } else {
            alert('passwords not matching')
        }
    }

}