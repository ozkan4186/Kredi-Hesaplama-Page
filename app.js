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





    sonuclar.innerHTML = `<h1>${taksit.toFixed(2)}</h1> <h2>${taksit.toFixed(2)}</h2>     <h1 class="text-center" >Kredi Bilgileri</h1>
                <table class="table table-bordered border-warning mt-3  " >
                    <tr>
                        <th>Kredi Miktarı</th>
                        <td>${tutar.value}</td>
                         <th>Kredi Tipi</th>
                         <td>${kredi.value}</td>
                    </tr>
                    <tr>
                        <th>Vade</th>
                        <td>${vade.value}</td>
                           <th>Faiz Oranı</th>
                           <td>${oran}</td>

                    </tr>
                    <tr>
                        <th>Toptan ödenecek tutar</th>
                        <td>${taksit*(vade.value)}</td>
                        <th>Taksit Tutarı</th>
                        <td>${taksit} </td>

                    </tr>
                </table> `


})