let inputElement = document.getElementById("input")

let btnElement = document.querySelector(".btn")

btnElement.addEventListener("click", () = > {
    createpassword()
})

function createpassword() {

    let charecters = "0123456789asdfghjklmnbvcxzqwertyuiopASDFGHJKLPOIUYTREWQZXCVBNM!@#$%^&*()"

    passwordlength = 10

    let password = ""

    for (let i = 0; i < passwordlength; i++) {

        let randomnumber = math.floor(math.random() * charecters. length)

        password = password + charecters.substring(randomnumber, + randomnumber + 1)

    }

    inputElement.value = password
}