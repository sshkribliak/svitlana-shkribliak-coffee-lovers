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


// fetch('https://api.github.com/users/sshkribliak/repos')
//     .then(response => response.json())
//     .then(repositories => console.log(repositories))
//     .catch(error => {
//         console.error("Error fetching repositories:", error);
//     });

// fetch("https://api.sampleapis.com/coffee/hot")
//     .then(resp => resp.json())
//     .then(data => console.log(data[0].title));

// fetch("https://api.sampleapis.com/coffee/iced")
//     .then(resp => resp.json())
//     .then(icedCoffee => console.log(icedCoffee));

// fetch("https://api.sampleapis.com/coffee/hot")
//     .then(resp => resp.json())
//     .then(coffee => {
//         console.log(coffee);
//         let coffeeSection = document.getElementById('coffee-types');
//         for (let i = 0; i < 18; i++) {  // replace 18 with the "coffee.length" to see all items currently available in the API source - in development
//             let coffeeType = document.createElement('div');
//             coffeeType.className = 'coffeeType';
//             let coffeeTitle = document.createElement('h2');
//             coffeeTitle.innerText = coffee[i].title;
//             coffeeSection.appendChild(coffeeType);

//             let coffeeImage = document.createElement('img');
//             coffeeImage.src = coffee[i].image;
//             coffeeImage.id = 'coffee-image';
//             coffeeImage.alt = `picture of ${coffee[i].title}`;
//             coffeeType.appendChild(coffeeTitle);
//             coffeeType.appendChild(coffeeImage);

//             let coffeeInformation = document.createElement('div');
//             coffeeInformation.id = 'information';
//             coffeeType.appendChild(coffeeInformation);
//             coffeeInformation.style.display = 'none';

//             let descriptionHeader = document.createElement('h2');
//             descriptionHeader.id = 'description-header';
//             descriptionHeader.innerText = 'Description';
//             coffeeInformation.appendChild(descriptionHeader);

//             let coffeeDescription = document.createElement('p');
//             coffeeDescription.id = 'description';
//             coffeeDescription.innerHTML = coffee[i].description;
//             coffeeInformation.appendChild(coffeeDescription);

//             let backButton = document.createElement('button');
//             backButton.type = 'button';
//             backButton.id = 'back-button';
//             backButton.innerText = 'Back';
//             coffeeInformation.appendChild(backButton);

//             let overlay = document.createElement('div');
//             overlay.id = 'overlay';
//             overlay.innerHTML = 'Tap to see description';
//             coffeeType.appendChild(overlay);

//             coffeeImage.addEventListener('click', () => {
//                 coffeeImage.style.display = 'none';
//                 coffeeInformation.style.display = 'block';
//                 backButton.style.display = 'block';
//                 overlay.style.display = 'none';

//             })

//             backButton.addEventListener('click', () => {
//                 coffeeImage.style.display = 'block';
//                 coffeeInformation.style.display = 'none';
//                 backButton.style.display = 'none';
//                 overlay.style.display = 'block';
//             })
//         }
//     })

// let today = new Date();
// let thisYear = today.getFullYear();

// const footer = document.querySelector('footer');
// let copyright = document.createElement('p');
// copyright.innerHTML = `&copy; Svitlana Shkribliak ${thisYear}`;
// copyright.classList.add('copyright');
// footer.appendChild(copyright);
