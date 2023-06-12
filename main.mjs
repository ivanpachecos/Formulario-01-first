const formulario = document.querySelector("#form");
const result = document.querySelector("#result");

function main() {
  formulario.addEventListener("submit", function (a) {
    a.preventDefault();

    const nameUser = a.target.nameUser.value.trim();
    const lastName = a.target.lastName.value.trim();
    const mail = a.target.mail.value.trim();
    const password = a.target.password.value;

    result.innerHTML = `
  Nombre: ${nameUser},<br>
  Apellido: ${lastName},<br>
  Email: ${mail},<br>
  Password: ${password}
  `;
  });
}

main();
