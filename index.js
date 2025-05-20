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
        let coffeeSection = document.getElementById('coffee-types');
        for (let i = 0; i < coffee.length; i++) {
            let coffeeType = document.createElement('div');
            let coffeeTitle = document.createElement('h2');
            coffeeTitle.innerText = coffee[i].title;
            coffeeSection.appendChild(coffeeType);

            let coffeeImage = document.createElement('img');
            coffeeImage.src = coffee[i].image;
            coffeeImage.style.maxWidth = "100%";
            coffeeImage.style.height = "auto";
            coffeeImage.id = 'coffee-image';
            coffeeType.appendChild(coffeeTitle);
            coffeeType.appendChild(coffeeImage);

        }
    })
