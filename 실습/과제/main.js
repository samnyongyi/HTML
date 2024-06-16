function insertHero() {
    const heroContainer = document.querySelector(".heroes");
  
    for (let i = 1; i <= 32; i++) {
      const heroImage = `./images/hero${i}.png`; 
      const heroElement = document.createElement("div");
      heroElement.classList.add("hero");
  
      const imgElement = document.createElement("img");
      imgElement.src = heroImage;
      imgElement.alt = "Hero";
  
      heroElement.appendChild(imgElement);
      heroContainer.appendChild(heroElement);
    }
  }
  