let username=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let identification=document.getElementById("idia")
let form=document.querySelector("form")

let users=JSON.parse(localStorage.getItem("users")) || []


form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let user={
        names:username.value,
        email:email.value,
        id:identification,
        password:password.value,
    }
    if(users.find((titi)=>titi.email==email.value)){
        alert("user already exist")
    }else{
    users.unshift(user)
    const stringify=JSON.stringify(users)
    localStorage.setItem("users",stringify)
    alert("user successfuly created")
    } 
})