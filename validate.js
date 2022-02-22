let username = document.getElementById("getUserName");
let loginBtn = document.getElementById("loginBtn");
let getPassword = document.getElementById("getPassword");
let userError = document.getElementById('userError');
let passError = document.getElementById('passError');




let logDetails = JSON.parse(localStorage.getItem('USERDETAILS'));



// let loginDetails = {
//     user: 'venkat',
//     password: 12345
// }


username.addEventListener('blur',function(){
    if(username.value == ""){
        userError.textContent = '*Required';
    }
    else{
        userError.textContent = '';
    }
})

getPassword.addEventListener('blur',function(){
    if(getPassword.value == ''){
        passError.textContent = '*Required';
    }
    else{
        passError.textContent = '';
    }
})



function checkUserName(){
    let filterValue = logDetails.filter(val => username.value == val.NAME)
    console.log(filterValue);
    if(filterValue.length > 0){
        userError.textContent = '';
        return true;
    }else{
        userError.textContent = 'Invalid User Name !!!!'
    }    
}

function checkpassword(){
    let filterPass = logDetails.filter(val => getPassword.value == val.PASSWORD)
    console.log(filterPass);
    if(filterPass.length > 0){
        passError.textContent = '';
        return true;
    }else{
        passError.textContent = 'Invalid Password !!!';
    }
}



function validateForm(){
    if (logDetails == null){
        alert('Pleaser register or enter credentials')
        return false;
    }
    let val1 = checkUserName();
    let val2 = checkpassword();
    
    if(val1 && val2){
        return true;
    }
    else{
        alert('check you credentials')
        return false;
    }

    
}
