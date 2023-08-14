let form=document.querySelector("form")
let fullname=document

    form.addEventListener("submit",(e)=>{
        e.preventDefault()

    })
     users.forEach((user)=>{
        form.innerHTML+=`<textarea>${user.message}</textarea>`
     })