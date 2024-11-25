const registerForm = document.querySelector(".register-form")

registerForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
  
    const username = document.querySelector(".register-username").value;
    const password = document.querySelector(".register-password").value;
  
    console.log(`Username: ${username} \nPassword: ${password}`);
  
    try {
    await axios.post("http://localhost:3000/api/auth/register", { username:username, password:password }).then(res=>{ 
        console.log(res.data)
    }) 
    } catch (err) {
        console.log(err)
    }
  });
  