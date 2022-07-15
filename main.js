let counter = 0;
let firstselection = "";
let secondSelection = "";

// To select all the cards
const cards = document.querySelectorAll(".cards .card");

// we will need to run for each loop for all the cards 
cards.forEach((card) => {
    card.addEventListener("click", () => {
        // when we click on the card, color of the card should chage so we add a class
        card.classList.add("clicked");

        if(counter === 0){  //we havent selected any of the card
            firstselection = card.getAttribute("animal");
            counter++;
        }
        else{
            secondSelection = card.getAttribute("animal");
            counter = 0;

            // to check if both of the selection are equal or not
            if(firstselection === secondSelection){
                const correctCards = document.querySelectorAll(".card[animal = '" + firstselection + "']");
            

                correctCards[0].classList.add("checked"); //checked: it means it is correct
                correctCards[0].classList.remove("clicked");
                correctCards[1].classList.add("checked");
                correctCards[1].classList.remove("clicked");

                setTimeout(() =>{
                    alert("Congrats!, The cards you picked match. lets test your memory with other cards too!");
                }, 800);
                // alert("Congrats!, The cards you picked match. lets test your memory with other cards too!");
            }
            else{
                const incorrectCards = document.querySelectorAll(".card.clicked");
                
                incorrectCards[0].classList.add("shake");
                incorrectCards[1].classList.add("shake");

                setTimeout(() =>{
                    incorrectCards[0].classList.remove("shake");
                    incorrectCards[0].classList.remove("clicked");
                    incorrectCards[1].classList.remove("shake");
                    incorrectCards[1].classList.remove("clicked");
                    alert("The Animals you picked do not match. Pick Again!");
                }, 800);

                // alert("The cards you picked do not match. Pick Again!!");
            }
        }
    });
});
