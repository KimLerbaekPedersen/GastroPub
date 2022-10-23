// FOOTER API START
fetch('https://gastropub.webexam-mcdm.dk/api/texts', {
    headers: {
        Accept: 'application/json'
    }
})
    .then(function (res) {
        return res.json();
    })
    .then(function (resData) {
        function footerData() {
            const apiData = document.querySelector('#kontakt-data')

            apiData.innerHTML += 
                "<div class='kontaktWrapper'>"
                + "<img class='gps' src='../assets/img/gps.png'/>"
                + "<div class='adr' style='width:50%;'>" + resData[9].description + "</div>"
                + "</div>"

                +

                "<div class='kontaktWrapper'>"
                + "<img class='phone-footer' src='../assets/img/phone.png'/>"
                + "<div class='tlf-footer'>" + resData[10].description + "</div>"
                + "</div>"
        }
        footerData()
    });
// FOOTER API END