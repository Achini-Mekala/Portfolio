
  function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    function showProgress() {
      progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute("style").match(/width:\s*(\d+%)/)[1];
        bar.style.width = targetWidth;
      });
    }

    function resetProgress() {
      progressBars.forEach(bar => {
        bar.style.width = "0";
      });
    }

   
    function handleScroll() {
      const skillsSection = document.getElementById("skills");
      const rect = skillsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        showProgress();
      } else {
        resetProgress();
      }
    }

    window.addEventListener("scroll", handleScroll);
  });


  document.querySelector("#contact form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

   
    alert("✅ Thank you, " + name + "! Your message has been sent.");
    

    this.reset();
  });
 



