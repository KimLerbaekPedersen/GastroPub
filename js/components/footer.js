const footer = document.querySelector('#footer');

footer.innerHTML += `
<footer>
   <div class="footer-container">
       <div class="col-1">
           <h2>Information</h2>
           <p>En gastropub er en hybrid pub, bar <br> og restaurant, der er kendt for servering <br> af alkoholiske drikkevarer og mad.</p>
       </div>
       <div class="col-2">
           <h2>Kontakt</h2>
           <ul id="kontakt-data"></ul>
       </div>
   
       <div class="col-3">
           <h2>Social Media</h2>
           <svg class="face" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
           <svg class="insta" fill="url(#min-gradient);" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 3333 3333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-390 752h780c293 0 532 237 532 525v778c0 289-239 525-532 525h-780c-293 0-532-236-532-525v-778c0-289 240-525 532-525zm385 421c285 0 516 231 516 516s-231 516-516 516-516-231-516-516 231-516 516-516zm0 174c188 0 341 153 341 341s-153 341-341 341c-189 0-341-153-341-341s153-341 341-341zm499-246c46 0 84 37 84 84 0 46-37 84-84 84-46 0-84-37-84-84 0-46 37-84 84-84zm-820-200h652c245 0 445 199 445 443v656c0 244-200 443-445 443h-652c-245 0-445-199-445-443v-656c0-244 200-443 445-443z"/></svg>
           <svg class="twitter" viewbox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"/></svg>
       </div>
   </div>
</footer>

<svg style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false">
    <lineargradient id="min-gradient" x2="1" y2="1">
        <stop offset="0%" stop-color="#F204D4"/>
        <stop offset="100%" stop-color="#FF8000"/>
    </lineargradient>
</svg>
`