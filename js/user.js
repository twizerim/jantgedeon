    let table=document.querySelector("table")

    let users=JSON.parse(localStorage.getItem("users"))||[]

    users.forEach((user,index)=>{
        table.innerHTML+=`<td>${index+1}</td>,<td>${user.names}</td>,<td>${user.email}</td>,<td>${user.id}</td>,<td>${user.password}</td>`
    })
    