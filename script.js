function idadeatual() {
  var anonascimento = Number(
    window.document.getElementById("txtanoascimento").value,
  );
  var anoatual = Number(window.document.getElementById("txtanoatual").value);
  var idade = window.document.getElementById("txtidade");
  var idade = anoatual - anonascimento;

  txtidadeatual.value = idade;
}
