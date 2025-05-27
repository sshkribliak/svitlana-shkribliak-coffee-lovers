fetch('https://api.github.com/users/sshkribliak/repos')
    .then(response => response.json())
    .then(repositories => console.log(repositories))
    .catch(error => {
        console.error("Error fetching repositories:", error);
    });

fetch("https://api.sampleapis.com/coffee/hot")
    .then(resp => resp.json())
    .then(data => console.log(data[0].title));

fetch("https://api.sampleapis.com/coffee/hot")
    .then(resp => resp.json())
    .then(coffee => {
        console.log(coffee);
        let coffeeSection = document.getElementById('coffee-types');
        for (let i = 0; i < coffee.length; i++) {
            let coffeeType = document.createElement('div');
            let coffeeTitle = document.createElement('h2');
            coffeeTitle.innerText = coffee[i].title;
            coffeeSection.appendChild(coffeeType);

            let coffeeImage = document.createElement('img');
            coffeeImage.src = coffee[i].image;
            coffeeImage.id = 'coffee-image';
            coffeeImage.alt = `picture of ${coffee[i].title}`;
            coffeeType.appendChild(coffeeTitle);
            coffeeType.appendChild(coffeeImage);

            let coffeeInformation = document.createElement('div');
            coffeeInformation.id = 'information';
            coffeeType.appendChild(coffeeInformation);
            coffeeInformation.style.display = 'none';

            let descriptionHeader = document.createElement('h3');
            descriptionHeader.id = 'description-header';
            descriptionHeader.innerText = 'Description';
            coffeeInformation.appendChild(descriptionHeader);

            let coffeeDescription = document.createElement('p');
            coffeeDescription.id = 'description';
            coffeeDescription.innerHTML = coffee[i].description;
            coffeeInformation.appendChild(coffeeDescription);

            let backButton = document.createElement('button');
            backButton.type = 'button';
            backButton.id = 'back-button';
            backButton.innerText= 'Back';
            coffeeInformation.appendChild(backButton);

            coffeeImage.addEventListener('click', () => {
                coffeeImage.style.display = 'none';
                coffeeInformation.style.display = 'block';
                backButton.style.display = 'inline';

            })

            backButton.addEventListener('click', () => {
                coffeeImage.style.display = 'inline';
                coffeeInformation.style.display = 'none';
                backButton.style.display = 'none';
            })
        }
    })
