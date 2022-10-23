// MENU IMAGE AND TEXT START
// Fetch image to menu hero start
fetch('https://gastropub.webexam-mcdm.dk/api/images', {
    headers: {
        Accept: 'application/json'
    }
})
    .then(function (res) {
        return res.json();
    })
    .then(function (responseData) {
        function menuHeroImage() {
            const menuHeroImgData = document.querySelector("#menu-hero");
            const menuImage = document.querySelector("#menu-sec");

            menuHeroImgData.innerHTML += "<div class='heroWrapper'>"
                + "<div class='hero-header-wrapper'>" + "<h1 class='hero-header'>Menu</h1>" + "</div>"
                + "<img class='hero-img hero-menu-img' src='" + responseData[9].url + "'>"
                + "</div>"
    
                menuImage.innerHTML += "<div class='menuImgWrapper'>" + "<div class='menu-txt-wrapper'>" + "<img class='menu-kat' src='" + responseData[10].url + "'>" 
                                    + "</div>" 

                                    + "<div class='menu-txt-wrapper'>" + "<img class='menu-kat' src='" + responseData[11].url + "'>" 
                                    + "</div>" 

                                    + "<div class='menu-txt-wrapper'>" + "<img class='menu-kat' src='" + responseData[12].url + "'>" 
                                    + "</div>" + "</div>"
        }
        menuHeroImage()
    });
// Fetch image to menu hero end
fetch('https://gastropub.webexam-mcdm.dk/api/menus', {
    headers: {
        Accept: 'application/json'
    }
})
    .then(function (res) {
        return res.json();
    })
    .then(function (menuTxtData) {
        function menuHeroTxt() {
            const menuSecTxtData = document.querySelector("#menu-sec");
            
            menuSecTxtData.innerHTML += `<div class='menuTxtWrapper'>
                                     <div class='menu-soup-1'>  <h2 class='menu-titles'> Supper  </h2>  <hr>  <h3 class='dish-Headings'>  ${menuTxtData[0].name}  <p class='menu-Prices'>  ${menuTxtData[0].price}  </p>  </h3>  <p class='menu-Paragraphs'>  ${menuTxtData[0].ingredients}  </p>  <hr>  </div>
                                     <div class='menu-soup-1'>  <div class='menu-content-wrapper'>  <h3 class='dish-Headings'>  ${menuTxtData[1].name}  <p class='menu-Prices'>  ${menuTxtData[1].price}  </p>  </h3>  <p class='menu-Paragraphs'>  ${menuTxtData[1].ingredients}  </p>  </div>  <hr>  </div>
                                     <div class='menu-soup-1'>  <div class='menu-content-wrapper'>  <h3 class='dish-Headings'>  ${menuTxtData[2].name}  <p class='menu-Prices'>  ${menuTxtData[2].price}  </p>  </h3>  <p class='menu-Paragraphs'>  ${menuTxtData[2].ingredients}  </p>  </div>  <hr>  </div>
                                     <div class='menu-soup-1'>  <div class='menu-content-wrapper'>  <h3 class='dish-Headings'>  ${menuTxtData[3].name}  <p class='menu-Prices'>  ${menuTxtData[3].price}  </p>  </h3>  <p class='menu-Paragraphs'>  ${menuTxtData[3].ingredients}  </p>  </div>  <hr>  </div>

                                     <div class='menu-soup-1'>  <h2 class='menu-titles'> Salater  </h2>  <hr>  <h3 class='dish-Headings'>  ${menuTxtData[4].name}  <p class='menu-Prices'>  ${menuTxtData[4].price}  </p>  </h3>  <p class='menu-Paragraphs'>  ${menuTxtData[4].ingredients}  </p>  <hr>  </div>
                                     <div class='menu-soup-1'>  <div class='menu-content-wrapper'>  <h3 class='dish-Headings'>  ${menuTxtData[5].name}  <p class='menu-Prices'>  ${menuTxtData[5].price}  </p>  </h3>  <p class='menu-Paragraphs'>  ${menuTxtData[5].ingredients}  </p>  </div>  <hr>  </div>
                                     <div class='menu-soup-1'>  <div class='menu-content-wrapper'>  <h3 class='dish-Headings'>  ${menuTxtData[6].name}  <p class='menu-Prices'>  ${menuTxtData[6].price}  </p>  </h3>  <p class='menu-Paragraphs'>  ${menuTxtData[6].ingredients}  </p>  </div>  <hr>  </div>
                                     <div class='menu-soup-1'>  <div class='menu-content-wrapper'>  <h3 class='dish-Headings'>  ${menuTxtData[7].name}  <p class='menu-Prices'>  ${menuTxtData[7].price}  </p>  </h3>  <p class='menu-Paragraphs'>  ${menuTxtData[7].ingredients}  </p>  </div>  <hr>  </div>

                                    <div class='menu-soup-1'>  <h2 class='menu-titles'> Hovedretter  </h2>  <hr>  <h3 class='dish-Headings'>  ${menuTxtData[8].name}  <p class='menu-Prices'>  ${menuTxtData[8].price}  </p>  </h3>  <p class='menu-Paragraphs'>  ${menuTxtData[8].ingredients}  </p>  <hr>  </div>
                                    <div class='menu-soup-1'>  <div class='menu-content-wrapper'>  <h3 class='dish-Headings'>  ${menuTxtData[9].name}  <p class='menu-Prices'>  ${menuTxtData[9].price}  </p>  </h3>  <p class='menu-Paragraphs'>  ${menuTxtData[9].ingredients}  </p>  </div>  <hr>  </div>
                                    <div class='menu-soup-1'>  <div class='menu-content-wrapper'>  <h3 class='dish-Headings'>  ${menuTxtData[10].name}  <p class='menu-Prices'>  ${menuTxtData[10].price}  </p>  </h3>   <p class='menu-Paragraphs'>  ${menuTxtData[10].ingredients}  </p>  </div>  <hr>  </div>
                                    <div class='menu-soup-1'>  <div class='menu-content-wrapper'>  <h3 class='dish-Headings'>  ${menuTxtData[11].name} <p class='menu-Prices'>  ${menuTxtData[11].price}  </p>  </h3>   <p class='menu-Paragraphs'>  ${menuTxtData[11].ingredients}  </p>  </div>  <hr>  </div>
                                    </div>`
        }
        menuHeroTxt()
    });
// MENU IMAGE AND TEXT END