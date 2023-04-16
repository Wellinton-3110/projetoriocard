export function hideEX() {
  const ulGT = document.getElementById("ulGT");
  const ulEX = document.getElementById("ulEX");

  ulGT.classList.add("hidden");
  ulEX.classList.toggle("hidden");
}

export function hideGT(e) {
  const ulGT = document.getElementById("ulGT");
  const ulEX = document.getElementById("ulEX");
  const text = e.target.textContent;
  const findGT = text.match(/GT/);
  if (findGT[0] === "GT") {
    ulEX.classList.add("hidden");
    ulGT.classList.toggle("hidden");
  }
}

export function seniorMenu() {
  const ulSenior = document.getElementById("ulSenior");
  const ulEspecial = document.getElementById("ulEspecial");
  const ulValeSocial = document.getElementById("ulValeSocial");
  const ulBloqueios = document.getElementById("ulBloqueios");
  ulBloqueios.classList.add("hidden");
  ulValeSocial.classList.add("hidden");
  ulEspecial.classList.add("hidden");
  ulSenior.classList.toggle("hidden");
}

export function especialMenu() {
  const ulSenior = document.getElementById("ulSenior");
  const ulEspecial = document.getElementById("ulEspecial");
  const ulValeSocial = document.getElementById("ulValeSocial");
  const ulBloqueios = document.getElementById("ulBloqueios");
  ulBloqueios.classList.add("hidden");
  ulValeSocial.classList.add("hidden");
  ulSenior.classList.add("hidden");
  ulEspecial.classList.toggle("hidden");
}

export function valeSocialMenu() {
  const ulValeSocial = document.getElementById("ulValeSocial");
  const ulSenior = document.getElementById("ulSenior");
  const ulEspecial = document.getElementById("ulEspecial");
  const ulBloqueios = document.getElementById("ulBloqueios");
  ulBloqueios.classList.add("hidden");
  ulSenior.classList.add("hidden");
  ulEspecial.classList.add("hidden");
  ulValeSocial.classList.toggle("hidden");
}

export function bloqueiosMenu() {
  const ulValeSocial = document.getElementById("ulValeSocial");
  const ulSenior = document.getElementById("ulSenior");
  const ulEspecial = document.getElementById("ulEspecial");
  const ulBloqueios = document.getElementById("ulBloqueios");
  ulSenior.classList.add("hidden");
  ulEspecial.classList.add("hidden");
  ulValeSocial.classList.add("hidden");
  ulBloqueios.classList.toggle("hidden");
}
