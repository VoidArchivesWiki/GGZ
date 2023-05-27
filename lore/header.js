fetch("/Void-Archives-GGZ-Wiki/lore/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("headerinfo").innerHTML = data;
  });