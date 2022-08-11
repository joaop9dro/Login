const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    checkInputs();
});
  
  function checkInputs() {
    const usernameValue = username.value;
    const passwordValue = password.value;
    
if (usernameValue === "admin") {
      setSuccessFor(username);
    } else {
      setErrorFor(username, "Usuário inválido.");
    }

if (passwordValue === "admin12345") {
      setSuccessFor(password);
    } else if (passwordValue.length < 7) {
      setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    } else {
      setErrorFor(password, "Senha inválida.");
    }
if (formIsValid) {}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
      
    // Adiciona a mensagem de erro
    small.innerText = message;
      
    // Adiciona a classe de erro
    formControl.className = "form-control error";
    }

function setSuccessFor(input) {
    const formControl = input.parentElement;
      
    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
    }


}