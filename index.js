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
                        <img src="" alt="">
                        <p>Bolagsnamn</p>
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
        </div>
    `;
})

