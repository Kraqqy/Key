// protect
const linkRawUrl = 'https://raw.githubusercontent.com/Kraqqy/test33333/main/KEY.txt';
const redirectUrl = 'https://PLAYLINKY.COM';
fetch(linkRawUrl)
  .then(response => response.text())
  .then(data => {
    const numero = data.trim().toString();
    if (numero !== '123') {
    
      window.location.href = redirectUrl;
    }
  })
  .catch(error => console.error(error));
