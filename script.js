const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const name = document.querySelector(".username").value;
    const password = document.querySelector(".password").value;
  
    console.log(`Username: ${name} \nPassword: ${password}`);
  
    try {
    await axios.post("http://localhost:3000/api/auth/users", { name:name, password:password }).then(res=>{ console.log(res.data)}) 

    } catch (err) {
        console.log(err)
    }
  });

