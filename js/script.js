function openNav() {
  document.getElementById("mySidepanel").style.width = "40vh";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
        });
    });
});
