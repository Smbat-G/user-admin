let form = document.querySelector('.reg-form')
let register = document.querySelector('.reg-button')
let userList = []


register.addEventListener('click', function () {

   

    if (!form.fullName || !form.userName || !form.email || !form.password || !form.confirmPassword) {
        
        console.log("Please fill in all fields.")
        
    }
  
    if (form.password !== form.confirmPassword) {
        console.log("Passwords do not match.")
      
    }
    let user = {
        fullName: form.fullName.value,
        userName: form.userName.value,
        email: form.email.value,
        password: form.password.value,
        confirmPassword: form.confirmPassword.value
    };
  
    userList.push(user)
    localStorage.setItem('user-data', JSON.stringify(userList))
    console.log("User registered successfully.")
});


let viewButton = document.getElementsByClassName('view-button')[0]


// userList = JSON.parse(localStorage.getItem('userList'))

// function saveToLocalStorage() {
//     localStorage.setItem('userList', JSON.stringify(userList));
// }