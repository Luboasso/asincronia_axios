

let users = []

const text = document.getElementById("text");
const showUsers = () => {
axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        users = res.data
        text.innerHTML = ''
            users.forEach((user)=> {console.log(user.name)
                 text.innerHTML += `<li>${user.name}</li>`
            })
            return users
    }
    )
    .catch((err) => console.error(err));

    

    
}
const btn = document.getElementById ('btn');
btn.addEventListener('click', showUsers)



