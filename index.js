fetch('https://api.github.com/users/sshkribliak/repos')
    .then(response => response.json())
    .then(repositories => console.log(repositories))
    .catch(error => {
        console.error("Error fetching repositories:", error);
    });