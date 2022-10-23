const navbar = document.querySelector('#navbar');

navbar.innerHTML += `
<nav class="navBar">
    <nav id="subNav">
        <nav class="nav-wrapper">
        <a href="../html/index.html"><img class="logo" src="../assets/img/gastro-pub.svg" alt="logo gastro-pub"></a>
    <ul class="nav-items">
        <li class="about li-item">
            <a href="">Om Os <img class="dropDownArrow" src="../assets/img/dropDownArrow.png" alt=""></a>
            <ul class="dropDown-content li-item">
                <a href="">Om Gastropub</a>
                <a href="">Vores Team</a>
            </ul>
        </li>
        <li class="li-item"><a href="../html/menu.html">Menu</a></li>
        <li class="li-item"><a href="">Galleri</a></li>
        <li class="li-item"><a href="">Nyheder</a></li>
        <li class="li-item"><a href="../html/kontakt.html">Kontakt</a></li>
        <button onclick="openModal()" class="btn">Bestil Bord</button>
            </ul>
        </nav>
    </nav>
</nav>
`