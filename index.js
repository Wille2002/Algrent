let bolagsnamn;
let orgNr;
let address;
let leveransaddress;
let antal;

function orderPage(e) {
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6ZM12 20C9.97 20 7.57 19.18 5.86 17.12C7.61182 15.7462 9.77376 14.9996 12 14.9996C14.2262 14.9996 16.3882 15.7462 18.14 17.12C16.43 19.18 14.03 20 12 20Z" fill="black"/></svg>
                <input id="bolagsnamn" type="text" placeholder="Bolagsnamn">
            </div>
            <div class="input">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 1V4H23V6H20V9H18V6H15V4H18V1H20ZM12 13C10.9 13 10 12.1 10 11C10 9.9 10.9 9 12 9C13.1 9 14 9.9 14 11C14 12.1 13.1 13 12 13ZM13 3.06V5.08C12.6692 5.02761 12.3349 5.00087 12 5C8.65 5 6 7.57 6 11.2C6 13.54 7.95 16.64 12 20.34C16.05 16.64 18 13.55 18 11.2V11H20V11.2C20 14.52 17.33 18.45 12 23C6.67 18.45 4 14.52 4 11.2C4 6.22 7.8 3 12 3C12.34 3 12.67 3.02 13 3.06Z" fill="black"/></svg>
                <input id="orgNr" type="text" placeholder="Organisationsnummer">
            </div>
            <div class="input">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z" fill="black"/></svg>
                <input id="address" type="text" placeholder="Address">
            </div>
            <div class="input">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z" fill="black"/></svg>
                <input id="leveransaddress" type="text" placeholder="Leveransaddress">
            </div>

        </div>
        <div class="Header">Orderinformation</div>

            <div class="input">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.9625 5.32739 21.004 5.15598 21.0005 4.98253C20.9969 4.80908 20.9485 4.63951 20.8598 4.49039C20.7711 4.34127 20.6453 4.2177 20.4946 4.13175C20.3439 4.04579 20.1735 4.0004 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="black"/></svg>
                <input id="antal" type="number" min="0"placeholder="Antal dunkar (5L)">
            </div>

            <div id="beställKnapp">
                <button>Beställ</button>
            </div>
    </div>
</div>
`;
    document.getElementById("beställKnapp").addEventListener("click", showForm);
}

function showForm(e) {
    e.preventDefault();
    bolagsnamn = document.getElementById("bolagsnamn").value;
    orgNr = document.getElementById("orgNr").value;
    address = document.getElementById("address").value;
    leveransaddress = document.getElementById("leveransaddress").value;
    antal = document.getElementById("antal").value;

    document.querySelector("main").innerHTML = `
        <div class="container">
            <h1>Bekräfta Order</h1>
            <p>Är informationen korrekt?</p>

    <div class="order-card">
      <h3>Bolagsnamn</h3>
      <p>${bolagsnamn}</p>

      <h3>Organisationsnummer</h3>
      <p>${orgNr}</p>

      <h3>Address</h3>
      <p>${address}</p>

      <h3>Leveransadress</h3>
      <p>${leveransaddress}</p>

      <h3>Antal dunkar (5L)</h3>
      <p>${antal}</p>
    </div>

    <div class="button-group">
      <button class="back" id="tillbakaKnapp">Tillbaka</button>
      <button class="confirm" id="bekräftaKnapp">Bekräfta</button>
    </div>
  </div>
`;


    document.getElementById("tillbakaKnapp").addEventListener("click", () => {
        location.reload();
    });

    document.getElementById("bekräftaKnapp").addEventListener("click", sendMail)
};

function sendMail(e) {
    alert("Tack! Din order är bekräftad!");

    emailjs.send("", "", {
        order_id: 1,
        orders: 1,
        bolagsnamn: bolagsnamn,
        orgNr: orgNr,
        address: address,
        leveransaddress: leveransaddress,
        antal: antal,
        price: "--",
        cost: "--",
        email: ""
    })
        .then(() => {
        })
        .catch(error => {
            console.error("Något gick fel:", error);
            alert("Fel vid skickande av mejl. Försök igen.");
        });

    alert("Tack! Din order är bekräftad!");

};


function showDropDownMenu(array, menuText) {
    document.querySelectorAll(".dropDownContainer").forEach(el => el.remove());

    document.querySelectorAll(".menuItem").forEach(el => {
        let menu = el.querySelector(".dropDownMenu");
        if (menu && menu.textContent.trim() === menuText.trim()) {
            let dropDownContainer = document.createElement("div");
            dropDownContainer.classList.add("dropDownContainer");

            array.forEach(item => {
                let dropDownElement = document.createElement("div");
                dropDownElement.classList.add("dropDownElement");
                dropDownElement.textContent = item;
                dropDownContainer.appendChild(dropDownElement);
            });

            el.appendChild(dropDownContainer);
        }
    });
}

function selectDropDownMenu(menuText) {
    let infoArray = [];

    switch (menuText.trim()) {
        case "Om oss":
            infoArray = ["Leverans", "Återförsäljare", "B2B"];
            break;
        case "Produkten":
            infoArray = ["Algrent", "Algrent PROFFS"];
            break;
        case "FaQ":
            infoArray = ["Kundrecensioner", "Blogg", "Varför Algrent"];
            break;
        case "Rengör effektivt":
            infoArray = ["Tvätta tak", "Tvätta altan", "Fasadtvätt", "Tvätta markis", "Rengör utemöbler"];
            break;
        default:
            return;
    }

    showDropDownMenu(infoArray, menuText);
}

document.querySelectorAll(".dropDownMenu").forEach(el => {
    el.addEventListener("mouseenter", e => {
        selectDropDownMenu(e.target.textContent);
    });
});

const reveals = document.querySelectorAll(".scroll-reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;

        if (isVisible) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


document.querySelector("#produktKnapp").addEventListener("click", e => {
    document.querySelector("main").innerHTML = `
       <div id="containerProdukt">
            <div id="containerTopProdukt">
                <div id="imgDiv">
                    <img src="./img/algrentProdukt.png" alt="">
                </div>
                <div id="TopRightDiv">
                    <h1> Algrent Proffs</h1>
                    <p>Professionell sanering av alger, mossa & svartmögel</p>
                    <div id="produktFakta">
                        <h1>Snabb Produktfakta</h1>
                        <div id="faktaContainer">
                            <div id="fakta1">
                                <div>
                                    <p>Räcker till</p>
                                    <p>1l -> ca 100 m2 (21 l färdig lösning)</p>
                                </div>
                                <div>
                                    <p>Miljö</p>
                                    <p>Biologiskt nedbrytbar</p>
                                </div>
                            </div>
                            <div id="fakta2">
                                <div>
                                <p>Varaktighet</p>
                                    <p>Upp till 5 år</p>
                                </div>
                                <div>
                                    <p>Ytor</p>
                                    <p>Tak, fasader, stenplattor m.m</p>
                                </div>
                            </div>

                        </div>
                        </div>
                    <button>Hämta säkerhetsblad(PDF)</button>
                </div>
            </div>
            <div id="containerMidProdukt">
                
                <div id="midLeft">
                    <div>
                        <h1>Så fungerar Algrent Proffs</h1>
                        <p>Algrent Proffs är utvecklad för effektiv sanering av alger, mossa, svartmögel och lavar. Med
                            ett långvarigt skydd (upp till 5 år) lämpar den sig för tak, fasader, stenplattor och flera
                            andra hårda ytor. Produkten är biologiskt nedbrytbar och lätt att applicera. </p>
                    </div>
                    <div>
                        <h1>Fakta och användning</h1>
                        <ul>
                            <li>Passar på tak, fasader, stenplattor, tegel, trä m.m.</li>
                            <li>Appliceras med lågtrycksspruta, borste eller pensel</li>
                            <li>Bäst effekt vid temperatur över +5 °C och torrt väder</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Användarinstruktion</h1>
                        <p>Blanda enligt rekommendation på etiketten. Applicera jämnt över ytan och låt verka utan att
                            spola bort. Alger och mossa dör inom några dagar; synligt resultat normalt inom 1–2 veckor
                            beroende på väder och mängd organiskt material. </p>
                    </div>
                    
                </div>
                <div class="productImages">
                    <img class="productImg" src="img/frontPageDemo.png" alt="">
                    <img class="productImg" src="img/frontPageImg.png" alt="">
                </div>
                </div>
                <div id="containerMidBotProdukt">
                    <h1>Vanliga frågor</h1>
                    <div>
                        <div>
                            <p>Hur appliceras produkten?</p>
                            <div>+</div>
                        </div>
                        <div>
                            <p>Hur långt tid tar det innan man ser resultat</p>
                            <div>+</div>
                        </div>
                        <div>
                            <p>Är den skadlig för växter?</p>
                            <div>+</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>Säkerhet & nedladdningar</h1>
                    <p>Se säkerhetsdatabladet för fullständiga anvisningar om hantering, förvaring och personlig
                        skyddsutrustning.</p>
                    <p>Hämta säkerhetsdatablad (PDF)</p>
                </div>

            </div>
        </div>
    `
})