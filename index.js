// let form = document.querySelector(".reg-form");
// let register = document.querySelector(".reg-button");
// let userList = [];

// register.addEventListener("click", function () {
//   if (validation()) {
//     let user = {
//       fullName: form.fullName.value,
//       userName: form.userName.value,
//       email: form.email.value,
//       password: form.password.value,
//       confirmPassword: form.confirmPassword.value,
//     };

//     userList.push(user);
//     localStorage.setItem("user-data", JSON.stringify(userList));
//     console.log("User registered successfully.");
//     generateHTMLList()

//     form.fullName.value = "";
//     form.userName.value = "";
//     form.email.value = "";
//     form.password.value = "";
//     form.confirmPassword.value = "";
//   }
// });

// const validation = () => {
//   let isValidate = true;

//   if (
//     !form.fullName.value.length ||
//     !form.userName.value.length ||
//     !form.email.value.length ||
//     !form.password.value.length ||
//     !form.confirmPassword.value.length
//   ) {
//     console.log("Please fill in all fields.");
//     isValidate = false;
//   }

//   if (
//     form.password.value.length &&
//     form.confirmPassword.value.length &&
//     form.password.value !== form.confirmPassword.value
//   ) {
//     console.log("Passwords do not match.");
//     isValidate = false;
//   }

//   return isValidate;
// };

// let viewButton = document.getElementsByClassName("view-button")[0];

// const generateHTMLList = () => {
//   let localList = localStorage.getItem("user-data");
//   if (localList) {
//     const listContainer = document.getElementsByClassName("users-list")[0];
//     userList = JSON.parse(localList);
//     listContainer.innerHTML = ''

//     for (let i = 0; i < userList.length; i++) {
//       let item = document.createElement("div");
//       item.classList.add('newuser')
//       item.innerHTML = `           <p class="P-fullname">Full Name: ${userList[i].fullName}</p>
//             <p class="P-Username">Username:  ${userList[i].userName}</p>
//             <p class="P-PhoneNumber">Phone Number: ${userList[i].email}</p>
//             <p class="P-Email">Email: ${userList[i].password}</p>
//             <p class ="P-Password">Password: ${userList[i].confirmPassword}</p>`;
//             listContainer.append(item)
//     }
//   }
// };

// generateHTMLList()

// // userList = JSON.parse(localStorage.getItem('userList'))

// // function saveToLocalStorage() {
// //     localStorage.setItem('userList', JSON.stringify(userList));
// // }

const button = document.getElementsByClassName("add-number")[0];
let randomList = [];

button.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 10000);
  randomList.push(randomNumber);
  localStorage.setItem("storageKey", JSON.stringify(randomList));
  generateHTMLList();   // ?
});

const generateHTMLList = () => {
  let localList = localStorage.getItem("storageKey");  //?
  const numbers = document.getElementsByClassName("numbers-list-wrapper")[0];

  if (localList) {
    randomList = JSON.parse(localList);
    numbers.innerHTML = "";

    for (let i = 0; i < randomList.length; i++) {
      let item = document.createElement("div");
      item.classList.add("number-item");
      item.innerHTML = ` 
            <span class = 'remove-item'>x</span> 
            <p>${randomList[i]}</p>
`;
      numbers.appendChild(item);   //??

    }
  }
};

const removeButtons = document.getElementsByClassName('remove-item')[0]
for(let i = 0; i < removeButtons.length; i++){
  removeButtons(i).addEventListener('click', function(){
    removeItem(i)
  })
}

const removeItem =function(index){
  randomList.splice(index, 1)
  localStorage.setItem('storageKey', JSON.stringify(randomList))
  generateHTMLList()
}

generateHTMLList();


