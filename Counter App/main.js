const arttirButon = document.querySelector(".arttir")
const azaltButon = document.querySelector(".azalt")
const number = document.querySelector(".sayi")
let basSayi = 0
arttirButon.addEventListener("click",() =>
{
    basSayi++
    number.innerHTML = basSayi
}
)
azaltButon.addEventListener("click",() =>
{
    basSayi--
    number.innerHTML = basSayi
}
)