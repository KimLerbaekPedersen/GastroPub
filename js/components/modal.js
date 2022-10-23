const modal = document.querySelector('#modal');

modal.innerHTML += 
`<div id="mainModal" style="display: none;">
<div class="subModal">
    <div class="modalWrapper">
        <div class="close-btn-wrapper">
            <h2 class="modal-header">Bestil Bord</h2> 
            <a href="#"><img class="closeBtn" onclick="openModal()" src="../assets/img/closeBtn.png" alt="close button"></a>
        </div>
        <input class="name" type="text" placeholder="Navn *" required>
        <input class="tlf" type="tel" onkeypress="isInputNumber(event)" placeholder="Telefon *" required>
        <input class="date" type="date" placeholder="Bestilings Dato *" onfocus="(this.type='date')" onblur="(this.type='text')" required>
        <textarea class="message" name="information" cols="50" rows="8" placeholder="Besked"></textarea>
        <button type="submit">Send</button>
    </div>
</div>
</div>
`