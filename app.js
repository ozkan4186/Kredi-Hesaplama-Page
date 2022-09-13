let kredi = document.querySelector("#select");

let vade = document.querySelector("#vade");

let tutar = document.querySelector("#tutar");

let hesap = document.querySelector("#hesap");

let sonuclar = document.querySelector("#sonuclar");

let taksit = 0
let oran = 0



hesap.addEventListener("click", (e) => {
    e.preventDefault()
    if (kredi.value === "Konut Kredisi") {
        oran = 1.91

    } else if (kredi.value === "Ihtiyac Kredisi") {
        oran = 1.55

    } else if (kredi.value === "Arac Kredisi") {
        oran = 1.59

    } else {
        alert("Kredi turunu seciniz");
    }

    const faiz = oran / 100;
    taksit =
        (tutar.value * (faiz * (1 + faiz) ** vade.value)) /
        ((1 + faiz) ** vade.value - 1);





    sonuclar.innerHTML = `<h1>${taksit.toFixed(2)}</h1>`

})