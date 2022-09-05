const nombre = "Jorge"
const apellido = "Bañón"

const yo = [{nombre, apellido}]
console.log(yo)

sessionStorage.setItem("yo", JSON.stringify(yo))
localStorage.setItem("yo", JSON.stringify(yo))

let fecha = new Date()
fecha.setTime(fecha.getTime() + (2*60*1000))
const expira = "; expires=" + fecha.toGMTString()

const laCookie = "miCookie"
document.cookie = laCookie + JSON.stringify(yo) + expira