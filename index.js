document.getElementById("Form").addEventListener("click", e => {
    document.querySelector("main").innerHTML = `
        <div id="formPage">
            <img src="../Algrent/img/algrentProdukt.png" alt="">
            <div id="formContainer">

                <div id="info">Beställ Algrent i 5 litersdunkar för företag och organisationer genom att svara på
                    formuläret och klicka beställ
                </div>

                <div class="Header">Företagsuppgifter</div>

                <div id="inputContainer">
                    <div class="input">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6ZM12 20C9.97 20 7.57 19.18 5.86 17.12C7.61182 15.7462 9.77376 14.9996 12 14.9996C14.2262 14.9996 16.3882 15.7462 18.14 17.12C16.43 19.18 14.03 20 12 20Z" fill="black"/>
                        </svg>
                        <input type="text" placeholder="Bolagsnamn">
                    </div>
                    <div class="input">
                        <img src="" alt="">
                        <p>Organisationsnummer</p>
                    </div>
                    <div class="input">
                        <img src="" alt="">
                        <p>Address</p>
                    </div>
                    <div class="input">
                        <img src="" alt="">
                        <p>Leveransaddress</p>
                    </div>

                </div>
                <div class="Header">Orderinformation</div>

                    <div class="input">
                        <img src="" alt="">
                        <p>Antal dunkar (5L)</p>
                    </div>

                    <div id="beställKnapp">
                        <button>Beställ</button>
                    </div>
            </div>
        </div>
    `;
})

