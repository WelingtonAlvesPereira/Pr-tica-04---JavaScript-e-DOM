let input = document.getElementById("input");
let mostrar = document.getElementById("mostrar");
let limpar = document.getElementById("limpar");

let info = document.getElementById("info");
let p = document.createElement("p");

mostrar.addEventListener("click", () => {
  if (!input.value) {
    alert("AA");
    return;
  }
  p.innerHTML = input.value;

  info.style.marginTop = "10px";
  info.style.backgroundColor = "greenyellow";
  info.style.maxWidth = "250px";
  info.style.padding = "10px";
  info.style.border = "1px solid black";
  info.style.borderRadius = "5px";
  info.style.color = "black";
  // info.style.justifyContent = "center";
  // info.style.alignItems = "center";

  info.appendChild(p);
});

limpar.addEventListener("click", () => {
  p.innerHTML = input.value;
  p.style.fontSize = "";

  info.style.display = "none";

  input.value = "";
  p.innerHTML = "";
});

let incrementar = document.getElementById("incrementar");
let decrementar = document.getElementById("decrementar");
let limparCon = document.getElementById("limparCon");
let contador = document.getElementById("contador");
let con = 0;

incrementar.addEventListener("click", () => {
  con = contador.value;

  con++;

  contador.value = con;
});

decrementar.addEventListener("click", () => {
  con = contador.value;

  con--;

  contador.value = con;
});
limparCon.addEventListener("click", () => {
  con = contador.value;

  con = 0;

  contador.value = con;
});
