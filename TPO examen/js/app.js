/*validación javascript de dato de contacto*/

function validateForm() {
  let x = document.forms["myForm"]["fcontacto"].value;
  if (x == "") {
    alert("Ingrese un celular o mail, por favor! ");
    return false;
  }
}
