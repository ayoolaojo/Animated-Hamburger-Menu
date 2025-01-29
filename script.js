const side = document.getElementById("sidebar");

      const hamburger = document.getElementById("hamburger");

      const closeBar = document.getElementById("close-icon");

      hamburger.addEventListener("click", () => {
        side.style.display = "flex";
      });

      closeBar.addEventListener("click", () => {
        side.style.display = "none";
      });

