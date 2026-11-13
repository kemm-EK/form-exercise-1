// Øvelse. Udskriv data fra formularen

// 1. først lave en identifier (const) med et element fra opsamlingssiden

// 2. lav en betingelse, der tjekker om identifieren fra punkt 1 findes

// 3. Inde i betingelsen
// a) Start med at skrive noget ud u Konsollen,
//    så du ved at din betingelse virker

// b) Lav en identifier, der peger på <span> elementet i
//    opsamlingssiden

// c) lav en identifier, der kan holde på alle formdata,
//    sendt til opsamlingssiden

// d) Lav in identifier, der specifikt trækker data ud
//    fra formen.
//    Du kan se hvad data-delen hedder i HTML'en på form-siden
//    (eller i URLen, når du sender formen)

// e) Udskriv den data-værdi, du har trukket up fra formen
//    på opsamlingssiden i span-tagget.

// Øvelse. Prøv selv at lave et element mere fra grunden
//         Du skal bare lave et text-input mere, så det ikke bliver
//         mere komplekst end højst nødvendigt

// 4. Tilføj et element (<input>) på formsiden
//    og træk det ud i et nyt <p> på opsamlingssiden

// LØSNINGSFORSLAG

// const eventPass = document.querySelector(".event-pass");
// if (eventPass) {
//   console.log(eventPass);
//   const output_username = document.querySelector(".user-name");
//   const params = new URLSearchParams(window.location.search);
//   const username = params.get("username");
//   output_username.textContent = username;
// }
