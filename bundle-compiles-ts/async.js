function pertama() {
    console.log("ini pertama");
}
// TUTOR DARI YT DEA AFRIZAL

// {TEUKU REYNALDI}

// setTimeout is a method that giving nodeJs an extraTime to compile,
// if you want node take a long compiles, you can set it the values to be a seconds

// just like below, 30000 it means seconds converted to a minutes value
//  
// function kedua() {
//     setTimeout(() => {
//         console.log("fungsi kedua, mau di print... sama node js")
//     },0)
// }

// function ketiga() {
//     console.log("ketiga")
// }

// pertama();
// kedua();
// ketiga();

// What is flag asign???? 

const token = ~~[Math.random()*12345678];

const pictures = ["1.jpg" , "2.jpg", "3.jpg"];

function login(userName) {
    return {token,userName};
}


// a passing function
function getUser (token) {
    if(token) return {apiKey : "120AABBCC"};
}
function getPictures (apiKey) {
    if(apiKey) return pictures;    
}
let user = login("Teuku Reynaldi")
console.log(user);

let getUserPictures = Math.flor
console.log({getUserPictures})


let apiKey = getUser(user.token)
console.log(apiKey)
