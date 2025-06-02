const coffeeSection = document.getElementById('coffee-types');
const hotButton = document.getElementById('hot-button');
const icedButton = document.getElementById('iced-button');

// Function to clear current coffee display
function clearCoffeeSection() {
    coffeeSection.innerHTML = '';
}

// Function to display coffee based on type (hot or iced)
function fetchAndDisplayCoffee(type) {
    fetch(`https://api.sampleapis.com/coffee/${type}`)
        .then(resp => resp.json())
        .then(coffeeList => {
            clearCoffeeSection();

            coffeeList.forEach(coffee => {

                if (!coffee.image || coffee.image === "null") return;

                const coffeeType = document.createElement('div');
                coffeeType.className = 'coffeeType';

                const coffeeTitle = document.createElement('h2');
                coffeeTitle.innerText = coffee.title;

                const coffeeImage = document.createElement('img');
                coffeeImage.src = coffee.image;
                coffeeImage.id = 'coffee-image';
                coffeeImage.alt = `picture of ${coffee.title}`;

                const coffeeInformation = document.createElement('div');
                coffeeInformation.id = 'information';
                coffeeInformation.style.display = 'none';

                const descriptionHeader = document.createElement('h2');
                descriptionHeader.id = 'description-header';
                descriptionHeader.innerText = 'Description';

                const coffeeDescription = document.createElement('p');
                coffeeDescription.id = 'description';
                coffeeDescription.innerHTML = coffee.description;

                const backButton = document.createElement('button');
                backButton.type = 'button';
                backButton.id = 'back-button';
                backButton.innerText = 'Back';

                const overlay = document.createElement('div');
                overlay.id = 'overlay';
                overlay.innerHTML = 'Tap to see description';

                // Assemble elements
                coffeeInformation.appendChild(descriptionHeader);
                coffeeInformation.appendChild(coffeeDescription);
                coffeeInformation.appendChild(backButton);

                coffeeType.appendChild(coffeeTitle);
                coffeeType.appendChild(coffeeImage);
                coffeeType.appendChild(coffeeInformation);
                coffeeType.appendChild(overlay);

                // Event listeners
                coffeeImage.addEventListener('click', () => {
                    coffeeImage.style.display = 'none';
                    coffeeInformation.style.display = 'block';
                    overlay.style.display = 'none';
                });

                backButton.addEventListener('click', () => {
                    coffeeImage.style.display = 'block';
                    coffeeInformation.style.display = 'none';
                    overlay.style.display = 'block';
                });

                coffeeSection.appendChild(coffeeType);
            });
        })
        .catch(error => console.error("Error fetching coffee:", error));
}

// Button click events
hotButton.addEventListener('click', () => fetchAndDisplayCoffee('hot'));
icedButton.addEventListener('click', () => fetchAndDisplayCoffee('iced'));

fetchAndDisplayCoffee('hot');

let today = new Date();
let thisYear = today.getFullYear();

const footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `&copy; Svitlana Shkribliak ${thisYear}`;
copyright.classList.add('copyright');
footer.appendChild(copyright);